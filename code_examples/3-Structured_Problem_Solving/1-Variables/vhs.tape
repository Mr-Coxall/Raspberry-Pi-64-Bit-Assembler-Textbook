# Where should we write the GIF?
Output ./vhs.gif

# Set up a screen
Set FontSize 48
Set FontFamily "ComicMono Nerd Font"
Set Width 1920
Set Height 1080
Set TypingSpeed 200ms
Set Theme "Dracula+"
Set Framerate 60
Set Padding 20
Set Margin 15
Set MarginFill "#104972"
Set WindowBar Colorful
Set WindowBarSize 100
# Set PlaybackSpeed 0.5 # Make output 2 times slower

# source the .bashrc file
Hide
Type "source ~/.bashrc"
Enter
Type "cd Python"
Enter
Type "clear"
Enter

Show
Sleep 1s

Type "python ./main.py"
Sleep 1s
Enter

# Admire the output for a bit.
Sleep 10s
