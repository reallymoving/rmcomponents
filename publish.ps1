if (Test-Path -Path ".\publish") {
    Remove-Item -Path ".\publish" -Recurse
    Write-Host "Folder 'publish' removed."
}
else {
    Write-Host "Folder 'publish' does not exist."
}

$folderPath = ".\publish"
New-Item -Path $folderPath -ItemType Directory

$sourcePath = ".\src\components\*"
$destinationPath = ".\publish\"

# Get all subdirectories (folders) in the source path
$folders = Get-ChildItem -Path $sourcePath -Directory

# Loop through each folder and copy to the destination path
foreach ($folder in $folders) {
    $destinationFolder = Join-Path -Path $destinationPath -ChildPath $folder.Name
    Copy-Item -Path $folder.FullName -Destination $destinationFolder
}

$sourcePath = ".\src\blocks\*"
$destinationPath = ".\publish\"

# Get all subdirectories (folders) in the source path
$folders = Get-ChildItem -Path $sourcePath -Directory

# Loop through each folder and copy to the destination path
foreach ($folder in $folders) {
    $destinationFolder = Join-Path -Path $destinationPath -ChildPath $folder.Name
    Copy-Item -Path $folder.FullName -Destination $destinationFolder
}


# Set the root folder path
$rootFolder = "./publish"

# Get a list of all subfolders
$subFolders = Get-ChildItem -Path $rootFolder -Directory -Recurse

# Loop through each subfolder
foreach ($subFolder in $subFolders) {
    $subFolderName = $subFolder.Name

    # Skip processing if the subfolder name is "dist"
    if ($subFolderName -eq "dist") {
        continue
    }

    $filePath = Join-Path -Path $subFolder.FullName -ChildPath "package.json"
    $content = '{
  "name": "rmcomponents/' + $subFolderName + '",
  "private": true,
  "module": "../dist/esm/' + $subFolderName + '.js"
}'

    # Create the file and add content
    $content | Set-Content -Path $filePath
}

Copy-Item -Path ".\src\components\index.js" -Destination ".\indexcopy.js"

Copy-Item -Path ".\package.json" -Destination ".\publish\package.json"
