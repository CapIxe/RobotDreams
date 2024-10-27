
# How to Install Docker on macOS, Linux, and Windows

## Prerequisites
- Make sure your system meets the minimum requirements for Docker.
- Ensure you have administrative privileges to install software.

---

## 1. Install Docker on macOS

### Step 1: Download Docker for Mac
- Visit the [Docker Desktop for Mac page](https://www.docker.com/products/docker-desktop).
- Download the `.dmg` file for macOS.

### Step 2: Install Docker
- Double-click the downloaded `.dmg` file.
- Drag `Docker.app` to your Applications folder.
- Open `Docker.app` from your Applications folder.

### Step 3: Complete Setup
- Docker will prompt you to provide your password to complete the installation.
- After installation, Docker Desktop should start automatically.
- To check if Docker is installed, open a terminal and run:

    ```bash
    docker --version
    ```

---

## 2. Install Docker on Linux

### Step 1: Update Your System
Before installing Docker, update your package index:

#### Ubuntu:
```bash
sudo apt update
sudo apt upgrade
```

#### CentOS:
```bash
sudo yum update
sudo yum upgrade
```

### Step 2: Install Docker

#### On Ubuntu:
```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
```

#### On CentOS:
```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io
```

### Step 3: Start and Enable Docker
After installation, start Docker and ensure it starts on boot:

#### Ubuntu:
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

#### CentOS:
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### Step 4: Verify Installation
Verify Docker is running correctly by checking the version:

```bash
docker --version
```

---

## 3. Install Docker on Windows

### Step 1: Download Docker for Windows
- Visit the [Docker Desktop for Windows page](https://www.docker.com/products/docker-desktop).
- Download the Docker Desktop Installer executable.

### Step 2: Install Docker Desktop
- Double-click the installer to launch the setup wizard.
- Follow the instructions in the setup wizard, and enable the **Windows Subsystem for Linux (WSL)** option if prompted.

### Step 3: Complete Installation
- Docker will ask you to log out and log back into your Windows account to complete the installation.

### Step 4: Verify Installation
Once logged in again, you can check if Docker is installed correctly by opening a Command Prompt or PowerShell and running:

```bash
docker --version
```

---

## Post-Installation Steps

### macOS & Linux: Run Docker Without `sudo`
To manage Docker as a non-root user, run the following command:

```bash
sudo usermod -aG docker $USER
```

Log out and back in to apply the changes.

---

## Troubleshooting
- Ensure virtualization is enabled in BIOS (for Windows).
- For macOS, ensure the **Docker** icon is running in the menu bar.

---

## Useful Docker Commands
- `docker version`: Check the Docker version installed.
- `docker info`: Display Docker system-wide information.
- `docker run hello-world`: Run a test Docker container to verify the installation.

---

For more detailed documentation, visit the official [Docker documentation](https://docs.docker.com/get-docker/).
