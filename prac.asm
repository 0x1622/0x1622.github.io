.model small
.stack 100h
.data
    msg1 db "Enter a string with max 20 chars: $"
    msg2 db 10, 13, "The decrypted string is: $"
    string1 db 20, 0, 20 dup('$')  ; Buffer for input
    len db 0                        ; Store actual length
    shifter db 3                    ; Rotation value
    encrypted db 20 dup('$')         ; Buffer for encrypted output

.code
.startup
    ; Display message
    mov dx, offset msg1
    mov ah, 09h
    int 21h
    
    ; Read input string
    mov dx, offset string1
    mov ah, 0Ah
    int 21h
    
    ; Store actual length
    mov al, string1+1   ; Get entered length
    mov len, al         ; Store in len
    
    ; Reverse the string
    mov cl, len         ; Load string length
    mov ch, 0
    lea si, string1+2   ; Start of input string
    lea di, encrypted   ; Start of encrypted buffer
    add si, cx
    dec si              ; Adjust to last character

reverse_loop:
    cmp cx, 0
    je encryption_done
    mov al, [si]
    mov [di], al
    dec si
    inc di
    loop reverse_loop

encryption_done:
    ; Flip bits and rotate right
    mov cx, len
    lea si, encrypted
flip_loop:
    mov al, [si]
    not al               ; Flip bits
    mov cl, shifter
    ror al, cl           ; Rotate right
    mov [si], al
    inc si
    loop flip_loop

    ; Display message
    mov dx, offset msg2
    mov ah, 09h
    int 21h
    
    ; Display encrypted message
    mov dx, offset encrypted
    mov ah, 09h
    int 21h
    
    ; Exit program
    mov ah, 4Ch
    int 21h
end
