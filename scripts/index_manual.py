import fitz  # PyMuPDF
import json
import re
import sys
import argparse

def extract_error_codes(pdf_path, patterns_json):
    try:
        doc = fitz.open(pdf_path)
        results = []
        patterns = json.loads(patterns_json)
        
        # Compila os regex
        compiled = {k: re.compile(v, re.IGNORECASE) for k, v in patterns.items()}

        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            if not text.strip():
                continue

            for pattern_name, regex in compiled.items():
                for match in regex.finditer(text):
                    # Usa o primeiro grupo de captura se houver, senão usa o match inteiro
                    code = match.group(1).strip() if match.groups() else match.group(0).strip()
                    
                    # Pega um pouco de contexto ao redor (300 caracteres)
                    start = max(0, match.start() - 150)
                    end = min(len(text), match.end() + 150)
                    context = text[start:end].replace("\n", " ").strip()

                    results.append({
                        "code": code.upper(),
                        "page": page_num + 1,  # 1-indexed
                        "context": context
                    })

        total_pages = len(doc)
        doc.close()
        
        return {
            "success": True,
            "total_pages": total_pages,
            "codes": results
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", required=True)
    parser.add_argument("--patterns", required=True)
    args = parser.parse_args()

    output = extract_error_codes(args.pdf, args.patterns)
    print(json.dumps(output))
