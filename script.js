var jogo=[]//Array que vai guardar as posições das jogadas.
var tabuleiro=[]//Array que vai armazenar os elementos visuais.
var quemJoga=0//0=jogador // 1 =CPU
var verifica//Variável que vai verificar se houve vencedor ou não.
var jogando=true//Vai indicar se o jogo está rolando ou não.
var nivel=2//Vai indicar qual o nível de dificuldade.
var jogadaCpu=1//Variável para indicar qual a jogada da CPU.
var quemComeca=1//Vai indicar quem vai começar, o jogador ou a CPU.
var jogada=0

function cpuJoga(){//Função que vai realizar a jogada da CPU.
    if(jogando){
        var l,c//Variável de linha e coluna.
        if(nivel==1){//Se o nível da dificuldade for igual a 1.
            do{
                l=Math.round(Math.random()*2)//'l', vai receber um número aleatório arredondado entre 0 e 2.
                c=Math.round(Math.random()*2)//'c', vai receber um número aleatório arredondado ente 0 e 2.
            }while(jogo[l][c]!='')//Enquanto jogo na posição 'l' e 'c', for diferente de vazio, ele continua sorteando.
            jogo[l][c]='O'//Quando o espaço estiver vazio, ele sai do While, e preenche a div com o 'O'.
        }else if(nivel==2){
            //ATAQUE
            //Jogadas linha 1
            if((jogo[0][0]=='O')&&(jogo[0][1]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else if((jogo[0][0]=='O')&&(jogo[0][2]=='O')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else if((jogo[0][1]=='O')&&(jogo[0][2]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }else
            //Jogadas linha 2
            if((jogo[1][0]=='O')&&(jogo[1][1]=='O')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][0]=='O')&&(jogo[1][2]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[1][2]=='O')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else
            //Jogadas linha 3
            if((jogo[2][0]=='O')&&(jogo[2][1]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[2][0]=='O')&&(jogo[2][2]=='O')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[2][1]=='O')&&(jogo[2][2]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else
            //Jogadas coluna 1
            if((jogo[0][0]=='O')&&(jogo[1][0]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][0]=='O')&&(jogo[2][0]=='O')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][0]=='O')&&(jogo[2][0]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }else
            //Jogadas coluna 2
            if((jogo[0][1]=='O')&&(jogo[1][1]=='O')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[0][1]=='O')&&(jogo[2][1]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][1]=='O')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else
            //Jogadas colunas 3
            if((jogo[0][2]=='O')&&(jogo[1][2]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][2]=='O')&&(jogo[2][2]=='O')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][2]=='O')&&(jogo[2][2]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='0'
            }else
            //Jogadas diagonal 1
            if((jogo[0][0]=='O')&&(jogo[1][1]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][0]=='O')&&(jogo[2][2]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][2]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }else
            //Jogadas diagonal 2
            if((jogo[0][2]=='O')&&(jogo[1][1]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][2]=='O')&&(jogo[2][0]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][0]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else
            //Defesa
            //Jogadas linha 1
            if((jogo[0][0]=='X')&&(jogo[0][1]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else if((jogo[0][0]=='X')&&(jogo[0][2]=='X')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else if((jogo[0][1]=='X')&&(jogo[0][2]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }else
            //Jogadas linha 2
            if((jogo[1][0]=='X')&&(jogo[1][1]=='X')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][0]=='X')&&(jogo[1][2]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[1][2]=='X')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else
            //Jogadas linha 3
            if((jogo[2][0]=='X')&&(jogo[2][1]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[2][0]=='X')&&(jogo[2][2]=='X')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[2][1]=='X')&&(jogo[2][2]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else
            //Jogadas coluna 1
            if((jogo[0][0]=='X')&&(jogo[1][0]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][0]=='X')&&(jogo[2][0]=='X')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][0]=='X')&&(jogo[2][0]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }else
            //Jogadas coluna 2
            if((jogo[0][1]=='X')&&(jogo[1][1]=='X')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[0][1]=='X')&&(jogo[2][1]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][1]=='X')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else
            //Jogadas coluna 3
            if((jogo[0][2]=='X')&&(jogo[1][2]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][2]=='X')&&(jogo[2][2]=='X')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][2]=='X')&&(jogo[2][2]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='0'
            }else
            //jogadas diagonal 1
            if((jogo[0][0]=='X')&&(jogo[1][1]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][0]=='X')&&(jogo[2][2]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][2]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }else
            //Jogadas diagonal 2
            if((jogo[0][2]=='X')&&(jogo[1][1]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][2]=='X')&&(jogo[2][0]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][0]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='X'
            }else{
                if(jogada<8){
                    do{
                        l=Math.round(Math.random()*2)
                        c=Math.round(Math.random()*2)   
                    }while(jogo[l][c]!='')
                    jogo[l][c]='O'
                }else{
                    for(var l=0;l<3;l++){
                        for(var c=0;c<3;c++){
                            if(jogo[l][c]==''){
                                jogo[l][c]='O'
                            }
                        }
                    }
                }
            }
        }   
        verifica=verificaVitoria()//Atribui a função à variável.
        if(verifica!=''){//Se verifica não estiver vazio, houve vencedor.
            alert(verifica+' Venceu')//Manda um alerta mostrando quem ganhou.
            jogando=false//Para o jogo.
        }
        atualizaTabuleiro()
        jogada++
        quemJoga=0
    }    
}

function verificaVitoria(){
    var l,c 
    //LINHAS
    for(l=0;l<3;l++){
        if((jogo[l][0]==jogo[l][1])&&(jogo[l][1]==jogo[l][2])){
            return jogo[l][0]
        }
       //Mostra quem venceu caso as 3 linhas estejam com o mesmo valor. 
    }
    //Colunas
    for(c=0;c<3;c++){
        if((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])){
            return jogo[0][c]
        }
        //Mostra quem venceu caso as 3 colunas estejam com o mesmo valor. 
    }
    //Diagonais
    if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){
        return jogo[0][0]
    }
    //Se os valores da diagonal estiverem iguais, o jogo vai mostrar quem venceu.
    if((jogo[2][0]==jogo[1][1])&&(jogo[1][1]==jogo[0][2])){
        return jogo[2][0]
    }
    //Se os valores das diagonais estiverem iguais, o jogo vai mostrar quem venceu.
    return''//Caso nenhuma dessas opções retorne nada, ele retorna vazio, indicando que não houve vencedor.
}

function jogar(p){//Função que vai indicar se a jogada do jogador.
   if((jogando)&&(quemJoga==0)){//Se o jogo estiver jogando e a vez for do jogador...
        switch(p){//Testando a posição.
            case 1://Caso o valor de (p) seja 1.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[0][0]==''){//Se o jogo na posição['0,0'] estiver vazio.
                    jogo[0][0]='X'//A posição ['0,0'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            case 2://Caso o valor de (p) seja 2.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[0][1]==''){//Se o jogo na posição['0,1'] estiver vazio.
                    jogo[0][1]='X'//A posição ['0,1'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            case 3://Caso o valor de (p) seja 3.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[0][2]==''){//Se o jogo na posição['0,2'] estiver vazio.
                    jogo[0][2]='X'//A posição ['0,2'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            case 4://Caso o valor de (p) seja 4.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[1][0]==''){//Se o jogo na posição['1,0'] estiver vazio.
                    jogo[1][0]='X'//A posição ['1,0'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            case 5://Caso o valor de (p) seja 5.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[1][1]==''){//Se o jogo na posição['1,1'] estiver vazio.
                    jogo[1][1]='X'//A posição ['1,1'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            case 6://Caso o valor de (p) seja 6.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[1][2]==''){//Se o jogo na posição['1,2'] estiver vazio.
                    jogo[1][2]='X'//A posição ['1,2'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            case 7://Caso o valor de (p) seja 7.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[2][0]==''){//Se o jogo na posição['2,0'] estiver vazio.
                    jogo[2][0]='X'//A posição ['2,0'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            case 8://Caso o valor de (p) seja 8.//Vamos verificar se essa posição pode ser jogada.
                if(jogo[2][1]==''){//Se o jogo na posição['2,1'] estiver vazio.
                    jogo[2][1]='X'//A posição ['2,1'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break
            default://Se não for nenhum desses casos//Caso o valor de (p) seja 9.
                if(jogo[2][2]==''){//Se o jogo na posição['2,2'] estiver vazio.
                    jogo[2][2]='X'//A posição ['2,2'] irá receber o 'X', do jogador.
                    quemJoga=1//Agora é a vez da CPU.
                }
                break  
            }
            if(quemJoga==1){//Verifica se a jogada é válida.
                atualizaTabuleiro()
                verifica=verificaVitoria()//Atribui a função à variável.
                if(verifica!=''){//Se verifica não estiver vazio, houve vencedor.
                    alert(verifica+' Venceu')//Manda um alerta mostrando quem ganhou.
                    jogando=false//Para o jogo.
                }
                jogada++
                cpuJoga()//Chama a CPU para a jogada.
            }
            
        }
    }

    function atualizaTabuleiro(){
        for(var l=0;l<3;l++){//For para percorrer as linhas.
            for(var c=0;c<3;c++){//For para percorrer as colunas.
                if(jogo[l][c]=='X'){//Se a posição [linha] e [coluna]for igual a 'X', eu vou atualizar o tabuleiro.
                    tabuleiro[l][c].innerHTML='X'//Tabuleiro na posição[l][c].O innerHTML, vai receber 'X'.
                    tabuleiro[l][c].style.cursor='default'//Quando for uma posição já jogada, o cursor do mouse vai apresentar a setinha novamente.
                }else if(jogo[l][c]=='O'){//Se a posição [linha] e [coluna]for igual a 'O', eu vou atualizar o tabuleiro.
                    tabuleiro[l][c].innerHTML='O'//Tabuleiro na posição[l][c].O innerHTML, vai receber 'O'.
                    tabuleiro[l][c].style.cursor='default'//Quando for uma posição já jogada, o cursor do mouse vai apresentar a setinha novamente.
                }else{//Para limpar o tabuleiro.
                    tabuleiro[l][c].innerHTML=''
                    tabuleiro[l][c].style.cursor='pointer'
                }
            }
        }
    }

    function inicia(){//Vai inicializar as variáveis.
        jogando=true//O jogo está rolando.
        jogadaCpu=1//A primeira jogada da CPU.
        jogada=0
        jogo=[
            ['','',''],
            ['','',''],
            ['','','']
        ]//Quando entrar no jogo, vai inicializar a matriz.
        //Matriz com 3 linhas e 3 colunas em cada linha.
        //A matriz irá guardar as cordenadas da posição.
        tabuleiro=[
            [document.getElementById('p1'),document.getElementById('p2'),document.getElementById('p3')],[document.getElementById('p4'),document.getElementById('p5'),document.getElementById('p6')],[document.getElementById('p7'),document.getElementById('p8'),document.getElementById('p9')]
        ]
        //O tabuleiro recebe cada uma das posições da matriz jogo, trazendo as posições dos inputs.
        atualizaTabuleiro()
        if(quemComeca==1){
            quemComeca=0
            quemJoga=quemComeca
            document.getElementById('dvQuemComeca').innerHTML='Quem começa: Jogador'
        }else{
            quemComeca=1
            quemJoga=quemComeca
            document.getElementById('dvQuemComeca').innerHTML='Quem começa: CPU'
            cpuJoga()
        }
    }

    window.addEventListener('load',inicia)//chama a função iniciar ao carregar a página.