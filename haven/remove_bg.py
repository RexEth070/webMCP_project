import sys
from rembg import remove
from PIL import Image

def main():
    input_path = 'public/3d-money.jpg'
    output_path = 'public/3d-money.png'

    try:
        inp = Image.open(input_path)
        output = remove(inp)
        output.save(output_path)
        print("Successfully removed background!")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
