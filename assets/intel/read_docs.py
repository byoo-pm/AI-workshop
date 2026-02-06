
import os
import sys
from docx import Document

# Force utf-8 output
sys.stdout.reconfigure(encoding='utf-8')

def read_docx(file_path):
    try:
        doc = Document(file_path)
        full_text = []
        for para in doc.paragraphs:
            if para.text.strip():
                full_text.append(para.text)
        return '\n'.join(full_text)
    except Exception as e:
        return f"Error reading {file_path}: {str(e)}"

directory = r"C:\Users\byulh\Documents\Antigravity\career_advancement\ai_survey\assets\intel"
files = ["intel stack.docx", "Copy of intel stack.docx"]

print("--- START OF DOCUMENTS ---")
with open("clean_extract.txt", "w", encoding="utf-8") as outfile:
    for f in files:
        path = os.path.join(directory, f)
        outfile.write(f"\n--- FILE: {f} ---\n")
        content = read_docx(path)
        outfile.write(content)
        outfile.write("\n")
print("--- END OF DOCUMENTS --- written to clean_extract.txt")
