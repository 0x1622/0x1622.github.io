.MODEL SMALL
.STACK 100H
.DATA
    msg1 db 10, 13, "Enter a 5-digit number: $"
    msg_even db 10, 13, "Even and $"
    msg_odd db 10, 13, "Odd and $"
    msg_positive db "Positive$"
    msg_negative db "Negative$"
    msg_ask db 10, 13, "Do you want to enter another number (Y/N) $"
    msg_exit db 10, 13, "Exiting$"
    
    num db 6, 0, 6 dup('$')  ; Buffer for 5-digit number (+ sign)
    choice db ?              ; User choice (Y/N)

.CODE
.STARTUP
main_loop:
    ; Display "Enter a 5-digit number"
    mov dx, offset msg1
    mov ah, 09h
    int 21h

    ; Read input number (max 6 characters including sign)
    mov dx, offset num
    mov ah, 0Ah
    int 21h

    ; Convert ASCII to integer
    mov si, offset num+2   ; Start of actual number
    mov cx, 5
    mov bx, 0              ; Store number in BX
    mov dh, 0              ; Flag: 0 = Positive, 1 = Negative

    ; Check if the number is negative
    cmp byte ptr [si], '-'
    jne convert_number
    inc si                 ; Move to next digit
    mov dh, 1              ; Set flag for negative

convert_number:
    mov ax, 0
    mov di, 10             ; Multiplier for decimal conversion

num_loop:
    mov dl, [si]          ; Load ASCII digit
    sub dl, '0'           ; Convert ASCII to integer
    imul bx, di           ; Multiply BX by 10
    add bx, dx            ; Add new digit
    inc si                ; Move to next digit
    loop num_loop

    ; Check for even/odd
    test bx, 1
    jz is_even

is_odd:
    mov dx, offset msg_odd
    mov ah, 09h
    int 21h
    jmp check_sign

is_even:
    mov dx, offset msg_even
    mov ah, 09h
    int 21h

check_sign:
    cmp dh, 1
    jne is_positive

is_negative:
    mov dx, offset msg_negative
    mov ah, 09h
    int 21h
    jmp ask_again

is_positive:
    mov dx, offset msg_positive
    mov ah, 09h
    int 21h

ask_again:
    ; Ask "Do you want to enter another number (Y/N)?"
    mov dx, offset msg_ask
    mov ah, 09h
    int 21h

    ; Get user choice
    mov ah, 01h
    int 21h
    mov choice, al

    ; Check if user entered 'Y' or 'y'
    cmp choice, 'Y'
    je main_loop
    cmp choice, 'y'
    je main_loop

exit_program:
    mov dx, offset msg_exit
    mov ah, 09h
    int 21h

    ; Exit program
    mov ah, 4Ch
    int 21h
END
