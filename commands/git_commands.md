# Git Commands Guide

This comprehensive guide covers essential Git commands for version control, from basic setup to advanced operations.

## Configuration

### 1. Set Global User Name and Email
Configure your identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. View Configuration
Check current settings:
```bash
git config --global --get user.name
git config --global --get user.email
```

## Getting Started

### 1. Initialize a New Git Repository
Create a new Git repository in the current directory:
```bash
git init
```

### 2. Clone an Existing Repository
Download a repository from a remote source:
```bash
git clone <repository-url>
```

## Basic Operations

### 3. Add Files to Staging Area
Stage changes for the next commit:
```bash
git add <file-name>          # Add specific file
git add .                   # Add all files in directory
git add -A                  # Add all files including deletions
```

### 4. Commit Changes
Save staged changes with a message:
```bash
git commit -m "Your commit message"
```

### 5. Check Repository Status
Display the status of working directory and staging area:
```bash
git status
```

### 6. View Differences
Show differences between working directory and staging area:
```bash
git diff                    # Unstaged changes
git diff --staged           # Staged changes
git diff HEAD               # All changes
```

## Branching and Merging

### 7. List Branches
Show all local branches:
```bash
git branch
```

### 8. Create and Switch to a New Branch
Create a new branch and switch to it:
```bash
git checkout -b <branch-name>
```

### 9. Switch Branches
Switch to an existing branch:
```bash
git checkout <branch-name>
```

### 10. Merge Branches
Merge changes from one branch into the current branch:
```bash
git merge <branch-name>
```

### 11. Rebase
Reapply commits from the current branch on top of another branch:
```bash
git rebase <branch-name>
```

## Remote Operations

### 12. List Remotes
Show remote repositories:
```bash
git remote -v
```

### 13. Add Remote
Add a new remote repository:
```bash
git remote add origin <repository-url>
```

### 14. Fetch from Remote
Download objects and refs from remote:
```bash
git fetch <remote-name>
```

### 15. Pull from Remote
Fetch and merge changes from remote:
```bash
git pull <remote-name> <branch-name>
```

### 16. Push to Remote
Upload local commits to remote:
```bash
git push <remote-name> <branch-name>
```

## History and Logs

### 17. View Commit History
Display commit history:
```bash
git log                     # Full log
git log --oneline           # Condensed log
git log --graph             # With branch graph
git log --author="Name"    # Filter by author
```

## Stashing

### 18. Stash Changes
Temporarily save uncommitted changes:
```bash
git stash save "Work in progress"
git stash                   # Quick stash
git stash push -m "Message" # With message
```

### 19. Apply Stash
Restore stashed changes:
```bash
git stash apply
git stash pop               # Apply and remove
git stash apply stash@{1}   # Apply specific stash
```

### 20. List and Manage Stashes
View and manage stashes:
```bash
git stash list
git stash drop              # Remove last stash
git stash clear             # Remove all stashes
```

## Resetting and Undoing

### 21. Reset Commits
Undo commits:
```bash
git reset --soft HEAD~1     # Keep changes staged
git reset HEAD~1            # Keep changes unstaged
git reset --hard HEAD~1     # Discard changes
git reset --hard HEAD~3     # Reset last 3 commits
```

### 22. Amend Last Commit
Modify the last commit:
```bash
git commit --amend -m "New message"
git commit --amend --no-edit # Change without editing message
```

## Tagging

### 23. Create Tag
Create a lightweight tag:
```bash
git tag v1.0
git tag -a v1.0 -m "Version 1.0"  # Annotated tag
```

### 24. List Tags
Show all tags:
```bash
git tag
git tag -l "v1.*"           # List matching tags
```

### 25. Push Tags
Upload tags to remote:
```bash
git push --tags
git push origin v1.0         # Push specific tag
```

### 26. Delete Tags
Remove tags:
```bash
git tag -d v1.0              # Local
git push origin --delete v1.0 # Remote
```

## File Operations

### 27. Remove Files
Remove files from repository:
```bash
git rm <file-name>          # Remove from repo and filesystem
git rm --cached <file-name> # Remove from repo only
```

### 28. Move/Rename Files
Move or rename files:
```bash
git mv <old-file> <new-file>
```

## Ignoring Files

### 29. Create .gitignore
Add a .gitignore file to ignore files:
```bash
echo "*.log" > .gitignore
git add .gitignore
git commit -m "Add .gitignore"
```

## Advanced Commands

### 30. Cherry-pick Commits
Apply commits from another branch:
```bash
git cherry-pick <commit-hash>
```

### 31. Bisect
Find the commit that introduced a bug:
```bash
git bisect start
git bisect bad               # Mark current as bad
git bisect good <commit>     # Mark commit as good
git bisect reset             # End bisect
```

### 32. Reflog
View reference logs:
```bash
git reflog                   # Show recent actions
git reflog --all             # Include branches
```

### 33. Clean Working Directory
Remove untracked files:
```bash
git clean -f                 # Remove files
git clean -fd                # Remove files and directories
git clean -n                 # Dry run
```

---

*Note: Replace placeholders like `<repository-url>` with actual values. Use `git --help` or `git <command> --help` for more options.*
