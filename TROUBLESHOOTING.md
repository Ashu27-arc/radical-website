# Troubleshooting Guide

## JSON Parse Error / Build Cache Issues

### Problem
If you encounter errors like:
- `SyntaxError: Expected property name or '}' in JSON at position 102`
- `Invalid source map` warnings
- `webpack.cache.PackFileCacheStrategy] Caching failed`
- Pages returning 500 errors during development

### Root Cause
These errors are caused by corrupted build cache in the `.next` and `dist` directories. This can happen due to:
- Interrupted builds
- System crashes during compilation
- File system issues
- Switching between branches with different dependencies

### Solution

#### Quick Fix (Manual)
Delete the cache directories:
```bash
# PowerShell
Remove-Item -Path .next -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path dist -Recurse -Force -ErrorAction SilentlyContinue
```

#### Using npm scripts (Recommended)
```bash
# Clean cache only
npm run clean

# Clean cache and start dev server
npm run clean:dev
```

### Prevention
1. Always use `npm run clean` before switching branches
2. Run `npm run clean` if you encounter build errors
3. The `.gitignore` file already excludes these directories from version control

### Additional Notes
- The source map warnings from `node_modules/next/dist/` are harmless and can be ignored
- They don't affect functionality, only debugging experience
- The real issue is always the JSON parse error, not the source map warnings
