$artifactDir = "C:\Users\ytshi\.gemini\antigravity\brain\ced0862e-f3c5-4cf5-8738-c8a27852e603"
$publicDir = "c:\Users\ytshi\OneDrive\Desktop\swarajdental\public\services"

$files = @{
    "checkup_1_1772445387689.png" = "checkup_1.png"
    "checkup_2_1772445405315.png" = "checkup_2.png"
    "fillings_1_1772445423898.png" = "fillings_1.png"
    "fillings_2_1772445445788.png" = "fillings_2.png"
    "rct_1_1772445463312.png" = "rct_1.png"
    "rct_2_1772445482077.png" = "rct_2.png"
    "cosmetic_1_1772445501857.png" = "cosmetic_1.png"
    "cosmetic_2_1772445528888.png" = "cosmetic_2.png"
    "braces_1_1772445544815.png" = "braces_1.png"
    "braces_2_1772445572233.png" = "braces_2.png"
    "gum_1_1772445590291.png" = "gum_1.png"
    "gum_2_1772445604174.png" = "gum_2.png"
    "implant_1_retry_1772445636751.png" = "implant_1.png"
    "implant_2_retry_1772445652682.png" = "implant_2.png"
    "surgery_1_retry_1772445672848.png" = "surgery_1.png"
    "surgery_2_final_1772445702152.png" = "surgery_2.png"
    "pediatric_1_final_1772445719159.png" = "pediatric_1.png"
}

if (-not (Test-Path $publicDir)) { New-Item -ItemType Directory -Path $publicDir }

foreach ($source in $files.Keys) {
    $dest = Join-Path $publicDir $files[$source]
    $sourcePath = Join-Path $artifactDir $source
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $dest -Force
        Write-Host "Copied $source to $dest"
    } else {
        Write-Host "Source NOT FOUND: $sourcePath"
    }
}

# Duplicate pediatric_1 to pediatric_2
Copy-Item -Path (Join-Path $publicDir "pediatric_1.png") -Destination (Join-Path $publicDir "pediatric_2.png") -Force
Write-Host "Duplicated pediatric_1 to pediatric_2"
