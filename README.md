# Overview
A cli tool to convert png images to Plant UML icons

# How To Use
- install the tool from npm
  ```
  npm i -g png-to-puml
  ```
- Run the CLI in same path of where you have the png file and pass it as an argument
  ```
  png-to-puml my-image.png
  ```
  The tool will generate the puml file at same path

- If you have a folder that has multiple PNG files and want to convert all of them at once, go to the folder in your terminal and execute the command 

  ```
  png-to-puml-folder
  ```
  it will scan the current directory, take all PNGs in it and convert them puml

