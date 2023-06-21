# ⚒️ Database: Migrate

/headingTitle

## Introduction

Migrate is a tool that allows you to manage database migrations

## Configuration

You can configure the database connection in the `app.yml` file, in the `database` section

```yaml
Postgresql:
  Enabled: false
  Host: ''
  Port: ''
  Username: ''
  Password: ''
  Database: ''
  Timeout: 60
  SslMode: disable
  LogLevel: error
```

## Usage

after everything is configured, you must must create a new model, for example `internal/api/models/user.go`

```go
package models

import (
  "time"
)

type User struct {
  Name      string    `json:"name"`
  Email     string    `json:"email"`
  Password  string    `json:"password"`
  CreatedAt time.Time `json:"created_at"`
  UpdatedAt time.Time `json:"updated_at"`
}
```

then you must add the model to the `pkg/database/migrate.go` file

```go
var MigrateList Migrates = Migrates{
	&models.User{},
}
```

last you can run the migrate command

```cmd
$ ikiyora migrate
```