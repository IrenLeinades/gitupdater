# GitUpdater

A command-line tool to update multiple Git repositories at once. GitUpdater finds all Git repositories in a directory and its subdirectories, then updates them using your credentials.

## Features

- 🔍 Automatically finds all Git repositories in a directory
- 🔐 Secure credential handling
- 🌐 Works on Windows, Linux, and macOS
- 🔄 Updates all repositories with a single command
- 🛡️ Cleans up credentials after use
- 📦 Optional automatic stashing of local changes with `--stashlocal`

## Installation

### Using npm (Recommended)

```bash
npm install -g @irenleinades/gitupdater
```

### Manual Installation

1. Clone the repository:
```bash
git clone https://github.com/irenleinades/gitupdater.git
cd gitupdater
```

2. Install dependencies:
```bash
npm install
```

3. Link the package:
```bash
npm link
```

## Usage

1. Navigate to a directory containing Git repositories:
```bash
cd /path/to/your/projects
```

2. Run the updater:

### Basic Usage
```bash
gitupdater
```

### With Automatic Stashing
```bash
gitupdater --stashlocal
```

3. Enter your Git credentials when prompted:
   - Username
   - Personal Access Token (PAT)

The tool will:
- Find all Git repositories in the current directory and subdirectories
- Update each repository using your credentials
- Show success/failure status for each repository
- Clean up credentials after use

### Command Line Options

- `--stashlocal`: Automatically stash local changes before pulling updates. This prevents conflicts with local modifications and ensures a clean update process.

## Windows Notes

If you encounter a PowerShell execution policy error, you can:

1. Run PowerShell as Administrator
2. Execute: `Set-ExecutionPolicy RemoteSigned`
3. Or run the tool using: `node $(which gitupdater)`

## Requirements

- Node.js (v14 or higher)
- Git
- npm (for installation)

## Security

- Credentials are only stored in memory during execution
- Temporary credential files are automatically cleaned up
- No credentials are stored permanently
- Uses secure password input (masked)

## License

MIT License - See [LICENSE](LICENSE) file for details

## Author

José Ñeri

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 