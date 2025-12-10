import os

def extract_markdown_files(root_dirs, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        outfile.write("# Legacy Data Extraction\n\n")
        
        for root_dir in root_dirs:
            # Check if directory exists
            if not os.path.isdir(root_dir):
                print(f"Directory not found: {root_dir}")
                continue
                
            for dirpath, dirnames, filenames in os.walk(root_dir):
                for filename in filenames:
                    if filename.endswith(('.md', '.mdx')):
                        filepath = os.path.join(dirpath, filename)
                        relpath = os.path.relpath(filepath, start=os.getcwd())
                        
                        outfile.write(f"\n\n## Source: {relpath}\n")
                        outfile.write("```markdown\n")
                        
                        try:
                            with open(filepath, 'r', encoding='utf-8') as infile:
                                outfile.write(infile.read())
                        except Exception as e:
                            outfile.write(f"Error reading file: {e}")
                            
                        outfile.write("\n```\n")
                        print(f"Extracted: {relpath}")

if __name__ == "__main__":
    root_dirs = ["/home/vijetapriya/csesweb/docs", "/home/vijetapriya/csesweb/blog"]
    output_file = "/home/vijetapriya/csesweb/legacy_data.md"
    extract_markdown_files(root_dirs, output_file)
