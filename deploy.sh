#!/bin/bash

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 服务器信息
SERVER_USER="root"
SERVER_HOST="38.246.237.206"
DEPLOY_PATH="/opt/1panel/apps/openresty/openresty/www/sites/spdi.orienthong.cn/index/"

# 打印带颜色的信息
print_info() {
    echo -e "${GREEN}[INFO] $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

print_error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

# 确认部署
confirm_deploy() {
    print_warning "即将部署到服务器: ${SERVER_HOST}"
    print_warning "部署路径: ${DEPLOY_PATH}"
    read -p "确认要继续部署吗? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "部署已取消"
        exit 0
    fi
}

# 检查必要的命令是否存在
check_dependencies() {
    if ! command -v rsync &> /dev/null; then
        print_error "rsync 未安装，请先安装 rsync"
        exit 1
    fi
}

# 检查 SSH 连接
check_ssh() {
    print_info "检查 SSH 连接..."
    if ! ssh -q -o BatchMode=yes -o ConnectTimeout=5 ${SERVER_USER}@${SERVER_HOST} echo ok &> /dev/null; then
        print_error "无法连接到服务器，请检查 SSH 配置"
        exit 1
    fi
    print_info "SSH 连接正常"
}

# 构建项目
build_project() {
    print_info "开始构建项目..."
    if npm run build; then
        print_info "项目构建成功"
    else
        print_error "项目构建失败"
        exit 1
    fi
}

# 部署到服务器
deploy_to_server() {
    print_info "开始部署到服务器..."
    
    # 创建备份
    print_info "创建远程备份..."
    BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
    if ssh ${SERVER_USER}@${SERVER_HOST} "cd ${DEPLOY_PATH} && tar czf ../backup_${BACKUP_DATE}.tar.gz ." ; then
        print_info "备份创建成功: backup_${BACKUP_DATE}.tar.gz"
    else
        print_warning "备份创建失败，继续部署..."
    fi
    
    # 使用 rsync 部署
    if rsync -avz --delete ./dist/ ${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}; then
        print_info "文件同步完成"
    else
        print_error "文件同步失败"
        exit 1
    fi
}

# 主流程
main() {
    check_dependencies
    check_ssh
    confirm_deploy
    build_project
    deploy_to_server
    print_info "部署完成！��"
}

# 运行主流程
main 