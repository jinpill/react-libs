# 문자 색상을 변경
#   - \e[<COLOR_CODE>m
# 문자 색상 코드
#   - 0: 색상 초기화
#   - 31: 빨간색
#   - 32: 초록색
#   - 33: 노란색
#   - 34: 파란색
#   - 35: 보라색
#   - 36: 시안색
#   - 37: 흰색
#   - 90: 회색
#   - 91: 밝은 빨간색
#   - 92: 밝은 초록색
#   - 93: 밝은 노란색
#   - 94: 밝은 파란색
#   - 95: 밝은 보라색
#   - 96: 밝은 시안색
#   - 97: 밝은 흰색

echo -e "\e[32m[Check List]\e[0m\n"
echo "\033[1;31mThis is red text \033[0m"
read -r -n 1 -p "[1/3] Did you update the README.md file? (y/N) - " response
case "$response" in
  [yY])
    echo "Updated the README.md file."
    ;;
  *)
    echo "Please update the README.md file."
    exit 1
    ;;
esac
