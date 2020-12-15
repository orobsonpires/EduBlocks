import os 
import fileinput

print("""
Welcome to the EduBlocks micro:bit Extension Configurator

This python program will guide you through adding your extension into EduBlocks.

It will modify all the files you need in the EduBlocks source code. All you need to do is tell it where your extension files are and it will do the magic for you!

This program will only run on Linux, macOS or Windows Subsystem for Linux.
""")

extensionName = toolbox = input("What is the name of your extension?\n")
path = input("Where are your files located? (Provide Full Path + forward slash at the end)\n")
toolbox = path + "toolbox.xml"
definitions = path + "definitions.ts"
generators = path + "generators.ts"
python_file = path + extensionName+ ".py"
main_image = path + extensionName+ ".png"
icon_image = path + extensionName+ "-icon.png"

blocks_index_var = "  if (extensions.indexOf('" +extensionName+ "') !== -1) {\n" \
"    (await import('./microbit/" +extensionName+ "/definitions')).default(Blockly.Blocks);\n" \
"    (await import('./microbit/" +extensionName+ "/generators')).default(Blockly.Python as any);\n" \
"    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', '" +extensionName+ "', 'toolbox.xml'));\n" \
"  }\n"

scripts_index_var = "  if (extensions.indexOf('" +extensionName+ "') !== -1) {\n" \
"    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', '" + extensionName+  "', '" +extensionName+ ".py')); \n" \
"  }\n"


typesFile = open("ui/src/types.ts", "rt")
data = typesFile.read()
data = data.replace("export type Extension =", ("export type Extension = '" +extensionName+ "' | " ))
typesFile.close()
typesFile = open("ui/src/types.ts", "wt")
typesFile.write(data)
typesFile.close()

for line in fileinput.FileInput("ui/src/app.ts",inplace=1):
    if "//Automated Extensions under here" in line:
        line=line.replace(line,line+"\n    newpy = newpy.replace('from " +extensionName+ " import *', '');\n")
    print(line, end='')

for line in fileinput.FileInput("ui/src/blocks/index.ts",inplace=1):
    if "//Automated Extensions under here" in line:
        line=line.replace(line,line+blocks_index_var)
    print(line, end='')

for line in fileinput.FileInput("ui/src/platforms/microbit/index.ts",inplace=1):
    if "//Automated Extensions under here" in line:
        line=line.replace(line,line+"\n      '" +extensionName+ "',\n")
    print(line, end='')

for line in fileinput.FileInput("ui/src/blocks/index.ts",inplace=1):
    if "//Automated Scripts under here" in line:
        line=line.replace(line,line+scripts_index_var)
    print(line, end='')

os.system("mkdir ui/src/blocks/microbit/" +extensionName)
os.system("cp " +definitions+ " ui/src/blocks/microbit/" +extensionName+ "/definitions.ts")
os.system("cp " +generators+ " ui/src/blocks/microbit/" +extensionName+ "/generators.ts")
os.system("cp " +toolbox+ " ui/src/blocks/microbit/" +extensionName+ "/toolbox.xml")
os.system("cp " +main_image+ " ui/images/" +extensionName+ ".png")
os.system("cp " +icon_image+ " ui/images/" +extensionName+ "-icon.png")
os.system("cp " +python_file+ " ui/src/blocks/microbit/" +extensionName+ "/"  +extensionName+  ".py")

print("Completed!")


