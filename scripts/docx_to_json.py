"""
Script de conversão simples de um documento DOCX com casos de suporte ao Business Central
para um ficheiro JSON ou JavaScript consumido pelo chatbot.

Nota: Esta é uma base de partida e pode necessitar de ajustes conforme a estrutura real
do documento. Requer a instalação da biblioteca `python-docx` (pip install python-docx).

Uso:
    python docx_to_json.py --input Base_de_apoios_BC.docx --output data.json
"""

import argparse
import json
import re
from pathlib import Path
from typing import List, Dict

from docx import Document


def parse_docx(path: Path) -> List[Dict]:
    doc = Document(str(path))
    cases = []
    current = None
    current_section = None

    def is_title(paragraph) -> bool:
        # Determina se um parágrafo é um título (podem existir outras heurísticas)
        if paragraph.style and paragraph.style.name and paragraph.style.name.lower().startswith("heading"):
            return True
        # Maioria do texto a negrito indica título
        bold_runs = 0
        total_runs = 0
        for run in paragraph.runs:
            if run.text.strip():
                total_runs += 1
                if run.bold:
                    bold_runs += 1
        return total_runs > 0 and bold_runs / total_runs > 0.5

    def extract_title(paragraph) -> str:
        return paragraph.text.strip().strip(":")

    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue
        if is_title(para):
            if current:
                cases.append(current)
            current = {
                "title": extract_title(para),
                "problem": "",
                "solution": "",
                "steps": [],
                "aliases": []
            }
            current_section = None
            continue
        lower = text.lower()
        if re.match(r"^(🛑\s*)?problema|error|erro", lower):
            current_section = "problem"
            # remove a palavra problema/erro
            parts = text.split(":", 1)
            current["problem"] = parts[1].strip() if len(parts) > 1 else ""
            continue
        if re.match(r"^(✅\s*)?solu[çc][ãa]o|solution", lower):
            current_section = "solution"
            parts = text.split(":", 1)
            current["solution"] = parts[1].strip() if len(parts) > 1 else ""
            continue
        if re.match(r"^(📌\s*)?como proceder|how to|steps", lower):
            current_section = "steps"
            continue
        # acumular de acordo com a secção
        if current_section == "problem":
            current["problem"] += " " + text
        elif current_section == "solution":
            current["solution"] += " " + text
        elif current_section == "steps":
            current["steps"].append(text)
        else:
            # parágrafos fora de secções podem ser ignorados ou usados como alias
            pass
    if current:
        cases.append(current)
    return cases


def main():
    parser = argparse.ArgumentParser(description="Converter DOCX de apoio BC para JSON")
    parser.add_argument("--input", required=True, help="Caminho para o ficheiro DOCX")
    parser.add_argument("--output", required=True, help="Ficheiro de saída (JSON ou JS)")
    parser.add_argument("--js", action="store_true", help="Gerar ficheiro JS (data.js) em vez de JSON puro")
    args = parser.parse_args()

    cases = parse_docx(Path(args.input))
    if args.js:
        with open(args.output, "w", encoding="utf-8") as f:
            f.write("const data = ")
            json.dump(cases, f, ensure_ascii=False, indent=2)
            f.write(";\n")
    else:
        with open(args.output, "w", encoding="utf-8") as f:
            json.dump(cases, f, ensure_ascii=False, indent=2)

    print(f"Gerado {len(cases)} casos em {args.output}")


if __name__ == "__main__":
    main()
