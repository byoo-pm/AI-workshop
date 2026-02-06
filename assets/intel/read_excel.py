
import pandas as pd
import sys

# Force utf-8 output
sys.stdout.reconfigure(encoding='utf-8')

file_path = r"c:\Users\byulh\Documents\Antigravity\career_advancement\ai_survey\assets\intel\NCE Product Marketing Demo (1).xlsx"

try:
    df = pd.read_excel(file_path)
    output = []
    output.append("--- COLUMNS ---")
    output.append(str(df.columns.tolist()))
    output.append("\n--- FIRST 10 ROWS ---")
    output.append(df.head(10).to_string())
    
    with open("excel_content.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(output))
    print("Content written to excel_content.txt")
except Exception as e:
    with open("excel_content.txt", "w", encoding="utf-8") as f:
        f.write(f"Error: {e}")
    print(f"Error: {e}")
