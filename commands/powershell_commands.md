# PowerShell Commands Guide

This comprehensive guide covers essential commands for working with PowerShell, including execution policies, file operations, process management, and system administration.

## Getting Started

### 1. Check Execution Policy
Display the current execution policy:
```powershell
Get-ExecutionPolicy
```

### 2. Set Execution Policy
Change the execution policy to allow script execution:
```powershell
Set-ExecutionPolicy RemoteSigned
Set-ExecutionPolicy Unrestricted  # Allow all scripts
Set-ExecutionPolicy Restricted    # Block all scripts
```

### 3. Get Help
Display help information:
```powershell
Get-Help
Get-Help <command>
Get-Help <command> -Full
```

### 4. List Commands
Show available commands:
```powershell
Get-Command
Get-Command -Module <module-name>
Get-Command -Name *service*  # Filter by name
```

## Navigation and File System

### 5. Get Current Location
Display current directory:
```powershell
Get-Location
pwd  # Alias
```

### 6. Change Directory
Navigate to a different directory:
```powershell
Set-Location <path>
cd <path>  # Alias
Set-Location ..  # Go up one level
Set-Location ~   # Go to home directory
```

### 7. List Directory Contents
Show files and folders:
```powershell
Get-ChildItem
ls  # Alias
dir  # Alias
Get-ChildItem -Hidden  # Include hidden files
Get-ChildItem -Recurse  # Recursive listing
```

### 8. Create New Item
Create files or directories:
```powershell
New-Item <name> -ItemType File
New-Item <name> -ItemType Directory
ni <name> -Type Directory  # Short form
```

### 9. Copy Items
Copy files or directories:
```powershell
Copy-Item <source> <destination>
cp <source> <destination>  # Alias
Copy-Item -Recurse <source> <destination>  # Copy directories
```

### 10. Move Items
Move or rename files/directories:
```powershell
Move-Item <source> <destination>
mv <source> <destination>  # Alias
```

### 11. Remove Items
Delete files or directories:
```powershell
Remove-Item <path>
del <path>  # Alias
rm <path>   # Alias
Remove-Item -Recurse <path>  # Delete directories
Remove-Item -Force <path>    # Force deletion
```

## File Content Operations

### 12. Read File Content
Display file contents:
```powershell
Get-Content <file>
cat <file>  # Alias
Get-Content <file> -Tail 10  # Last 10 lines
Get-Content <file> -Head 5   # First 5 lines
```

### 13. Write to File
Write content to a file:
```powershell
Set-Content <file> "content"
Set-Content <file> -Value "content"
"content" | Out-File <file>
```

### 14. Append to File
Add content to existing file:
```powershell
Add-Content <file> "additional content"
"content" | Out-File <file> -Append
```

## Process Management

### 15. List Processes
Show running processes:
```powershell
Get-Process
ps  # Alias
Get-Process -Name chrome  # Specific process
```

### 16. Stop Process
Terminate a process:
```powershell
Stop-Process -Name <process-name>
Stop-Process -Id <process-id>
Get-Process -Name notepad | Stop-Process
```

### 17. Start Process
Launch a new process:
```powershell
Start-Process <program>
Start-Process notepad
Start-Process <program> -ArgumentList <args>
```

## Service Management

### 18. List Services
Display system services:
```powershell
Get-Service
Get-Service -Name *sql*  # Filter services
```

### 19. Start Service
Start a service:
```powershell
Start-Service <service-name>
Start-Service -Name wuauserv  # Windows Update
```

### 20. Stop Service
Stop a service:
```powershell
Stop-Service <service-name>
Stop-Service -Name wuauserv
```

### 21. Restart Service
Restart a service:
```powershell
Restart-Service <service-name>
```

## Networking

### 22. Test Network Connection
Ping a host:
```powershell
Test-Connection <hostname>
Test-Connection google.com
Test-Connection -ComputerName <ip> -Count 4
```

### 23. Get Network Adapters
Display network interface information:
```powershell
Get-NetAdapter
Get-NetIPAddress
```

### 24. Download Web Content
Download content from the web:
```powershell
Invoke-WebRequest <url>
curl <url>  # Alias (if available)
Invoke-WebRequest -Uri <url> -OutFile <file>
```

### 25. Resolve DNS
Resolve hostname to IP:
```powershell
Resolve-DnsName <hostname>
Resolve-DnsName google.com
```

## System Information

### 26. Get System Info
Display system information:
```powershell
Get-ComputerInfo
Get-WmiObject -Class Win32_ComputerSystem
```

### 27. Get OS Version
Show operating system details:
```powershell
Get-WmiObject -Class Win32_OperatingSystem
[System.Environment]::OSVersion
```

### 28. Check Disk Space
Display disk usage:
```powershell
Get-WmiObject -Class Win32_LogicalDisk
Get-Volume
```

### 29. Get Environment Variables
Show environment variables:
```powershell
Get-ChildItem Env:
$env:PATH  # Specific variable
```

## Object Manipulation

### 30. Filter Objects
Filter results using Where-Object:
```powershell
Get-Process | Where-Object {$_.CPU -gt 10}
Get-Service | Where-Object {$_.Status -eq "Running"}
```

### 31. Select Properties
Select specific properties:
```powershell
Get-Process | Select-Object Name, CPU, Memory
Get-Service | Select-Object Name, Status
```

### 32. Sort Objects
Sort results:
```powershell
Get-Process | Sort-Object CPU -Descending
Get-Service | Sort-Object Name
```

### 33. Group Objects
Group results by property:
```powershell
Get-Process | Group-Object Company
Get-Service | Group-Object Status
```

### 34. Format Output
Format output display:
```powershell
Get-Process | Format-Table -AutoSize
Get-Service | Format-List
Get-Process | Format-Wide
```

## Pipeline and Variables

### 35. Use Pipeline
Chain commands with pipeline:
```powershell
Get-ChildItem | Where-Object {$_.Length -gt 1MB} | Sort-Object Length
```

### 36. Store in Variables
Store command output in variables:
```powershell
$processes = Get-Process
$files = Get-ChildItem
```

### 37. Export to CSV
Export data to CSV file:
```powershell
Get-Process | Export-Csv processes.csv
Get-Service | Export-Csv services.csv -NoTypeInformation
```

### 38. Import from CSV
Import data from CSV file:
```powershell
Import-Csv processes.csv
```

## Security and Permissions

### 39. Get File Permissions
Check file ACL:
```powershell
Get-Acl <file>
(Get-Acl <file>).Access
```

### 40. Set File Permissions
Modify file permissions:
```powershell
# Note: Requires careful handling
$acl = Get-Acl <file>
$accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule("user","FullControl","Allow")
$acl.SetAccessRule($accessRule)
Set-Acl -Path <file> -AclObject $acl
```

### 41. Check User Identity
Get current user information:
```powershell
whoami
[System.Security.Principal.WindowsIdentity]::GetCurrent()
```

## Advanced Scripting

### 42. Create Function
Define a custom function:
```powershell
function Get-MyInfo {
    Write-Host "Hello from PowerShell!"
}
Get-MyInfo
```

### 43. Use Loops
Iterate with loops:
```powershell
foreach ($item in Get-ChildItem) {
    Write-Host $item.Name
}

for ($i = 1; $i -le 5; $i++) {
    Write-Host $i
}
```

### 44. Conditional Statements
Use if/else statements:
```powershell
if (Test-Path <file>) {
    Write-Host "File exists"
} else {
    Write-Host "File does not exist"
}
```

### 45. Error Handling
Handle errors:
```powershell
try {
    Get-Content nonexistingfile.txt
} catch {
    Write-Host "Error: $_"
}
```

## Modules and Packages

### 46. List Modules
Show installed modules:
```powershell
Get-Module
Get-Module -ListAvailable
```

### 47. Install Module
Install a PowerShell module:
```powershell
Install-Module <module-name>
Install-Module -Name PSReadLine -Scope CurrentUser
```

### 48. Import Module
Load a module:
```powershell
Import-Module <module-name>
```

### 49. Update Module
Update installed modules:
```powershell
Update-Module <module-name>
```

## Remote Management

### 50. Enable PS Remoting
Enable PowerShell remoting:
```powershell
Enable-PSRemoting -Force
```

### 51. Enter Remote Session
Connect to remote computer:
```powershell
Enter-PSSession -ComputerName <computer>
```

### 52. Run Remote Command
Execute command on remote computer:
```powershell
Invoke-Command -ComputerName <computer> -ScriptBlock { Get-Process }
```

---

*Note: PowerShell is case-insensitive. Many commands have aliases for convenience. Use `Get-Help` extensively to learn more about each command. PowerShell 7+ is recommended for best compatibility. Some commands require administrator privileges.*
