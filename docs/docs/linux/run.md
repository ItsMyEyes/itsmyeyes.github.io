# ⚒️ How To Running I-Kiyora (LINUX)

/headingTitle

First you must download binary file from [Release Page](/docs/started.md#download-installation-package) and extract it. next you must set GOPATH enviroment, if you don't know how to set it, you can follow this step
[How To Setup GOPATH](/docs/setup-gopath.md), after all setup done, you can run it by type `i-kiyora` at terminal or command prompt. but wait you must move to i-kiyora directory first to [GOPATH](/docs/setup-gopath.md) directory
if everything is done correctly, you can running it

### Move i-kiyora to bin directory
First you must move i-kiyora binary file to bin directory, if you don't know how to move file, you can follow this step
```cmd
$ mv i-kiyora /usr/local/bin
```

### Permissions
If you get error like this
```cmd
$ i-kiyora
bash: i-kiyora: Permission denied
```

You must give permission to i-kiyora binary file
```cmd
$ chmod +x /usr/local/bin/i-kiyora
```

### Running I-Kiyora
After you move to i-kiyora directory, you can running it by type `i-kiyora` at terminal or command prompt
```cmd
$ i-kiyora
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