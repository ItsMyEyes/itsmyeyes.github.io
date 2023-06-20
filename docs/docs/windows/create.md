# ⚒️ Create a new project (WINDOWS)

/headingTitle

We recommend creating a new app using `i-kiyora.exe`, which sets up everything automatically for you. To create a project, run:
```cmd
C:\Projects\Golang> i-kiyora.exe create
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
You are using git version git version 2.34.1.windows.1
Your GOPATH is C:\Projects\Golang

-----------------------------------------------------------------------

What is the name of the project? balance_test_framework
What name your github?  ItsMyEyes

-----------------------------------------------------------------------

Your project name is balance_test_framework
Your module is github.com/ItsMyEyes/balance_test_framework
Your path is C:\Projects\Golang\balance_test_framework\

-----------------------------------------------------------------------
```

The prompts will ask you for the following information:
- **Project Name**: The name of your project. This will be used to name your project's directory and the main module.
- **Name your github**: The name of your github. This will be used to name your project's github.

After the prompts, `i-kiyora.exe create` will create a folder with your project name and install the required dependencies. This may take a few minutes. Once it's done, you'll see the following message:
```cmd
-----------------------------------------------------------------------

Your project is ready to use.
You can run it with the following commands:

$ cd C:\Projects\Golang\balance_test_framework\
$ go run ./cmd/http-server/main.go

-----------------------------------------------------------------------
```

You can now run your project with the following commands:

1. Move to your project directory
```cmd
cd C:\Projects\Golang\balance_test_framework\
```
2. Run your project
```cmd
go run ./cmd/http-server/main.go
```
Open your browser and go to http://localhost:8080, you can custom port by change in [app.yaml](/components/configuration-script#app.yaml)
