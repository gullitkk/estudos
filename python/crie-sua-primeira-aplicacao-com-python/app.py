print('''
░██████╗░█████╗░██████╗░░█████╗░██████╗░  ███████╗██╗░░██╗██████╗░██████╗░███████╗░██████╗░██████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
╚█████╗░███████║██████╦╝██║░░██║██████╔╝  █████╗░░░╚███╔╝░██████╔╝██████╔╝█████╗░░╚█████╗░╚█████╗░
░╚═══██╗██╔══██║██╔══██╗██║░░██║██╔══██╗  ██╔══╝░░░██╔██╗░██╔═══╝░██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗
██████╔╝██║░░██║██████╦╝╚█████╔╝██║░░██║  ███████╗██╔╝╚██╗██║░░░░░██║░░██║███████╗██████╔╝██████╔╝
╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░ ''')  #o print manda uma mensagem ou informação pro usuario \n quebra a linha
#As aspas triplas (''' ou """) são usadas para criar strings que abrangem várias linhas. Elas são úteis quando você precisa incluir quebras de linha e manter o formato do texto.

print('1. Cadastrar restaurante') 
print('2. Listar restaurante') 
print('3. Ativar restaurante')
print('4. Sair')

opcao_escolhida = int(input('Escolha uma opção: ')) #o input puxa uma informação do usuario,podemos colocar mensagens no input, nesse caso estamos falando falando para ele escolher uma opção e estamo armazenando essa escolha do usuario em uma variavel chamada opcao_escolhida, para determinar uma variavel no python basta botar um nome e igualar para separar palavras devemos usar o _ 

#a gente tava tendo 1 erro que todos ifs tava dando false, isso acontece porque a variavel opção escolhida tava indo como string e o numero 1,2,3 sao inteiros ou seja tudo vai da false, colocamos um int() antes do input para forçar que o valor que o usuario nos de ou seja a variavel opçao escolhida seja um valor inteiro

if opcao_escolhida == 1:
    print('Cadastrar restaurante')
elif opcao_escolhida == 2:
    print('Listar restaurantes')
elif opcao_escolhida == 3:
    print('Ativar restaurantes')
else: 
    print('Encerrando progama')