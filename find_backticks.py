
with open(r'c:\Users\victor.anunciacao\semul-guardachuva-1\index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    for i, char in enumerate(content):
        if char == '`':
            line = content[:i].count('\n') + 1
            prev = content[i-1] if i > 0 else 'START'
            print(f'Backtick at line {line}, prev char: {repr(prev)}')
