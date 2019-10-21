echo 'Welcome to the EduBlocks installer! What would you like to install?'
options=("EduBlocks Connect" "EduBlocks Desktop" "Both" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "EduBlocks Connect")
            echo "Installing EduBlocks Connect"
            curl -sSL http://edublocks.org/downloads/connect/auto-installer-connect.sh | bash
            break
            ;;
        "EduBlocks Desktop")
            echo "Installing EduBlocks Desktop"
            curl -sSL http://edublocks.org/downloads/desktop/auto-installer-desktop.sh | bash
            break
            ;;
        "Both")
            echo "Installing EduBlocks Connect & EduBlocks Desktop"
            curl -sSL http://edublocks.org/downloads/connect/auto-installer-connect.sh | bash && curl -sSL http://edublocks.org/downloads/desktop/auto-installer-desktop.sh | bash
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
