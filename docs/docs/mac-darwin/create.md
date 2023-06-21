# ⚒️ Create a new project (MAC-DARWIN)

/headingTitle

We recommend creating a new app using `i-kiyora`, which sets up everything automatically for you. To create a project, run:
```cmd
$ i-kiyora create
```

On installation, you'll see the following prompts:
```cmd
  _  __  _
 | |/ / (_)  _   _    ___    _ __    __ _
 | ' /  | | | | | |  / _ \  | '__|  / _` |
 | . \  | | | |_| | | (_) | | |    | (_| |
 |_|\_\ |_|  \__, |  \___/  |_|     \__,_|
             |___/
                            Version 1.0.0
-----------------------------------------------------------------------

You are using go version 1.20.5
You are using git version git version 2.34.1.apple.1
Your GOPATH is /home/itsmyeyes/go/projects

-----------------------------------------------------------------------

What is the name of the project? balance_test_framework
What name your github?  ItsMyEyes

-----------------------------------------------------------------------

Your project name is balance_test_framework
Your module is github.com/ItsMyEyes/balance_test_framework
Your path is /home/itsmyeyes/go/projects/balance_test_framework/

-----------------------------------------------------------------------
```

The prompts will ask you for the following information:
- **Project Name**: The name of your project. This will be used to name your project's directory and the main module.
- **Name your github**: The name of your github. This will be used to name your project's github.

After the prompts, `i-kiyora create` will create a folder with your project name and install the required dependencies. This may take a few minutes. Once it's done, you'll see the following message:
```cmd
-----------------------------------------------------------------------

Your project is ready to use.
You can run it with the following commands:

$ cd /home/itsmyeyes/go/projects/balance_test_framework/
$ go run ./cmd/http-server/main.go

-----------------------------------------------------------------------
```

You can now run your project with the following commands:

1. Move to your project directory
```cmd
cd /home/itsmyeyes/go/projects/balance_test_framework/
```
2. Run your project
```cmd
go run ./cmd/http-server/main.go
```

You should see the following output:
```cmd
NAME:
   services_name - run services_name-server

USAGE:
   main.exe [global options] command [command options] [arguments...]

VERSION:
   1.0.0 built on 2023-06-08 (commit: 1.0)

DESCRIPTION:
   services_name is a web server for microservice architecture

COMMANDS:
   start
   migrate
   help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
```

#### ⚠️ Note
- `start` is the command to run http server and default port is 8080. And you can custom port by change config file in `app.yaml`.
- `migrate` is the command to migrate database. And follow this step [How To Migrate](/docs/migrate.md)
