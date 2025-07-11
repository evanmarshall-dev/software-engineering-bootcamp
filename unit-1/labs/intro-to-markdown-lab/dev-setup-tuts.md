# Evan's Front End Web Development Setup

![Web developer sitting in front of his Apple-device-heavy developer setup.](./assets/pexels-olia-danilevich.jpg)

> [!NOTE]
> Hardware used: M1 MacBook Pro using MacOS 26 Tahoe Beta 3 software (_Tutorial updated July 2025_).

## Table of Contents

<!-- prettier-ignore-start -->

- [Preparing the Computer](#preparing-the-computer)
- [Install Terminal Applications](#install-terminal-applications)
- [Further IDE and Dev Directory Setup](#further-ide-and-dev-directory-setup)
- [For Reference](#for-reference)
- [Recommended add-ons/plug-ins](#recommended-add-onsplug-ins)
<!-- prettier-ignore-end -->

## Preparing the Computer

### GitHub Setup

1. Create a <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home" target="_blank" rel="noopener noreferrer">GitHub</a> account.

### Homebrew Setup

1. Install Homebrew by running the following command in your terminal:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. It's a good habit to update Homebrew regularly.

   ```sh
   brew update
   ```

### VS Code Setup

1. Install VS Code using Homebrew.

   ```sh
   brew install --cask visual-studio-code
   ```

2. To use the `code` shortcut in the terminal, you need to add it to your `PATH`.
   1. In VS Code, open the Command Palette with <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>.
   2. Type `Shell Command: Install 'code' command in PATH` and select it.

## Install Terminal Applications

1. Install `git` and `nvm` using Homebrew.

   ```sh
   brew install git nvm
   ```

2. Install Oh My ZSH (omz).

   ```sh
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   ```

3. Install a ligature-ready font for your terminal.

   ```sh
   brew tap homebrew/cask-fonts
   brew install --cask font-hack-nerd-font
   ```

   - Alternatively, go to <a href="https://github.com/tonsky/FiraCode" target="_blank" rel="noopener noreferrer">FiraCode Font</a> to download another great font manually.

## Further IDE and Dev Directory Setup

### vscode

1. Follow along with my vscode `settings.json` after installing the fonts and ZSH. We will add on to these settings as we continue on with the following setup. The example `settings.json` is referenced _here_: <a href="https://github.com/evanmarshall-dev/dotfiles/blob/main/vscode/settings.json" target="_blank" rel="noopener noreferrer">vscode `settings.json`</a>
2. Activate Settings Sync in vscode and link to your Github account.

### Git Setup

1. Configure your Git username and email. These should match your GitHub account.

   ```sh
   git config --global user.name "Your Name"
   git config --global user.email "youremail@example.com"
   ```

   > The first time you run these commands, a `.gitconfig` file will be created in your home directory. You can find my example here: <a href="https://github.com/evanmarshall-dev/dotfiles/blob/main/gitconf/.gitconfig" target="_blank" rel="noopener noreferrer">Sample Git Config</a>.

2. Create a global `.gitignore` file to exclude certain files (like `.DS_Store`) from all your repositories.

   ```sh
   touch ~/.gitignore_global
   ```

3. Tell Git to use this global ignore file.

   ```sh
   git config --global core.excludesfile ~/.gitignore_global
   ```

   > We will use and modify the example gitignore file to suit your needs. The example is referenced here: <a href="https://github.com/evanmarshall-dev/dotfiles/blob/main/gitignore/.gitignore_global" target="_blank" rel="noopener noreferrer">Sample Git Ignore</a>.

### Node & NVM Setup

1. Configure your shell to use NVM by adding it to your `.zshrc` file, then reload your shell configuration.

   ```sh
   echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.zshrc
   source ~/.zshrc
   ```

2. Install the latest Long-Term Support (LTS) version of Node.js.

   ```sh
   nvm install --lts
   ```

3. Check that Node.js and npm were installed correctly.

   ```sh
   node -v && npm -v
   ```

4. Update npm to the latest version.

   ```sh
   npm install -g npm@latest
   ```

5. (Optional) Install Yarn, another popular package manager.

   ```sh
   npm install -g yarn
   yarn -v
   ```

> [!NOTE]
> All of the above will make more sense as you continue with coding, utilizing node packages, version controlling and backups with Git, workflow automation, and making your development environment pretty/fit your own style.

## For Reference

Anytime you make a change to the zsh config file (`.zshrc`), you need to reload the configuration for the changes to take effect in your current terminal session.

```sh
source ~/.zshrc
```

To update Oh My ZSH and its plugins, run:

```sh
omz update
```

My config file example for Oh My ZSH (omz) can be found here: <a href="https://github.com/evanmarshall-dev/dotfiles/blob/main/zsh/.zshrc" target="_blank" rel="noopener noreferrer">`.zshrc` Config File</a>. Configuration, theme, aliases, plugins, and more setup for Oh My ZSH.

You can find a list of keyboard shortcut by clicking the cog icon in vscode action bar, but the following are some useful ones:

- **Open Command Palette**: <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>
- **Open Integrated Terminal**: <kbd>CTRL</kbd> + <kbd>\`</kbd>
- **Quick File Open**: <kbd>CMD</kbd> + <kbd>P</kbd>
  - Type `@` after to search for symbols in the current file.
  - Type `#` after to search for symbols across the entire workspace.
- **Save File**: <kbd>CMD</kbd> + <kbd>S</kbd>
- **Close File**: <kbd>CMD</kbd> + <kbd>W</kbd>
- **Undo / Redo**: <kbd>CMD</kbd> + <kbd>Z</kbd> / <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>Z</kbd>
- **Cut Line**: <kbd>CMD</kbd> + <kbd>X</kbd> (with cursor on the line)
- **Select Current Line**: <kbd>CMD</kbd> + <kbd>L</kbd>
- **Select Next Match**: <kbd>CMD</kbd> + <kbd>D</kbd> (select a word, then press again to select the next occurrence)
- **Multi-cursor**: Hold <kbd>OPTION</kbd> and click to place cursors in multiple spots.
- **Move Line Up/Down**: <kbd>OPTION</kbd> + <kbd>↑</kbd> or <kbd>↓</kbd>
- **Copy Line Up/Down**: <kbd>SHIFT</kbd> + <kbd>OPTION</kbd> + <kbd>↑</kbd> or <kbd>↓</kbd>
- **Go to Line Number**: <kbd>CTRL</kbd> + <kbd>G</kbd>
- **Fold/Unfold Code Block**: <kbd>CMD</kbd> + <kbd>OPTION</kbd> + <kbd>[</kbd> or <kbd>]</kbd>
- **Toggle Comment**: <kbd>CMD</kbd> + <kbd>/</kbd>
- **Trigger Suggestions**: <kbd>CTRL</kbd> + <kbd>SPACE</kbd>
- **Trigger Parameter Hints**: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>SPACE</kbd>

**Notes**:

- **_Typescript_** tends to provide better intellisense due to it having explicit types defined.
- Opening command palette and typing `EMMET: Balance (outward)` will select all sibling elements within a parent then opening command palette and typing `EMMET: Wrap with Abbreviation` will wrap all selected tags with one you specify.
- If you want to see all the references to a particular element in code, you can right-click and select `Peek > Peek References`. If you want to see where the original code was implemented you would select `Peek > Peek Implementations`. You can also follow the same process for **Definitions** and **Type Definitions**.
- If you want to rename a function for example, you would select `Peek > Peek Implementations` then **Right** click the function name and select `Rename Symbol`. This is a safer way to rename all related implementations of an element in code.

## Recommended add-ons/plug-ins

| #   | Plugin/Tool                                                                                                                                                                                     | Description                                                                                                                           |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | <a href="https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md" target="_blank" rel="noopener noreferrer">ZSH Auto Suggestions</a>                                            | Suggests commands as you type based on your history. Follow the install instructions for Oh My ZSH.                                   |
| 2   | <a href="https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md" target="_blank" rel="noopener noreferrer">ZSH Syntax Highlighting</a>                                     | Provides syntax highlighting for commands in the terminal, helping to prevent errors. Follow the install instructions for Oh My ZSH.  |
| 3   | <a href="https://www.darraghoriordan.com/2021/05/04/configure-multiple-github-accounts-one-computer" target="_blank" rel="noopener noreferrer">Securing Your Connection to Github Using SSH</a> | You should generate SSH keys to secure your connection to your GitHub remote repositories. This is more secure than using a password. |

<!-- @TODO: | 4 | More Advanced Development Setups using Gulp | Again, this could warrant another tutorial, but basically gulp helps you automate tedious development tasks and speeds up your development workflow/efficiency. It can aid with tasks such as processing SASS code into CSS, minifying code, compressing/optimizing images, preparing code for production, etc. -->
