## Issue

https://github.com/tuist/tuist/issues/7144

## Steps To Reproduce

### Clone Branch

#### HTTPS
```
git clone --branch tuist-repro-1 --single-branch https://github.com/navtoj/debug.git tuist-repro-1
```

#### SSH
```
git clone --branch tuist-repro-1 --single-branch git@github.com:navtoj/debug.git tuist-repro-1
```

### Change Working Directory

```
cd tuist-repro-1
```

### Generate Xcode Project

```
tuist generate
```

### Run Project — ⌘R

![Screenshot 2024-12-06 at 5 32 49 PM](https://github.com/user-attachments/assets/069b5782-73c6-4448-abe5-12f1df288f03)
