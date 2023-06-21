# ⚒️ How To Running I-Kiyora (WINDOWS)

/headingTitle

First you must download binary file from [Release Page](/docs/started.md#download-installation-package) and extract it. next you must set GOPATH enviroment, if you don't know how to set it, you can follow this step
[How To Setup GOPATH](/docs/setup-gopath.md), after all setup done, you can run it by type `i-kiyora` at terminal or command prompt. but wait you must move to i-kiyora directory first to [GOPATH](/docs/setup-gopath.md) directory
if everything is done correctly, you can running it

### Extract I-Kiyora
After you download binary file from [Release Page](/docs/started.md#download-installation-package), you must extract it. you can extract it with [WinRAR](https://www.win-rar.com/start.html?&L=0) or [7-Zip](https://www.7-zip.org/download.html) or other software, after you extract it, you can make directory `C:\ikiyora` and move binary file to `C:\ikiyora` , if you want to move it to other directory, you can move it to other directory, but you must remember the directory path

### Add I-Kiyora to PATH
If you want to run I-Kiyora from anywhere, you can add it to PATH, you can follow this step
1. Open the Start menu and search for "Edit the system environment variables" and select the matching result.
2. In the System Properties window that appears, click on the "Environment Variables" button.
3. In the Environment Variables window, you will see two sections: "User variables" and "System variables". To add the directory to the PATH for all users, edit the "System variables" section. To add it only for your user account, edit the "User variables" section.
4. Locate the "Path" variable in the list of variables and select it.
5. Click on the "Edit" button to modify the Path variable.
6. In the Edit Environment Variable window, click on the "New" button.
7. Enter the directory path `C:\ikiyora\` or your directory path.
8. Click "OK" to close all the windows.
9. It is important to restart any open command prompt windows or applications for the changes to take effect.

### Running I-Kiyora
After you move to i-kiyora directory, you can running it by type `i-kiyora` at terminal or command prompt
```cmd
C:\Projects\Golang> i-kiyora
NAME:
   ikiyora - run ikiyora

USAGE:
   ikiyora [command] [arguments...]

VERSION:
   1.0.0 built on 2023-06-19 (commit: now)

DESCRIPTION:
   IKiyora is a installation tool for Kiyora

AUTHOR:
   ItsMyEyes - Andi

COMMANDS:
   create   Creating a new project
   add      Add Module / Adapter
   help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
```