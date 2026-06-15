let bancoDeDados = {
    genero: [
        { ID_Genero: 1, nome_genero: "Ação", descricao: "Filmes de ação com cenas intensas e emocionantes." },
        { ID_Genero: 2, nome_genero: "Comédia", descricao: "Filmes que têm como principal objetivo fazer rir." },
        { ID_Genero: 3, nome_genero: "Drama", descricao: "Filmes com foco em situações emocionais e dramáticas." },
        { ID_Genero: 4, nome_genero: "Ficção Científica", descricao: "Filmes que envolvem elementos futuristas e tecnológicos." },
        { ID_Genero: 5, nome_genero: "Romance", descricao: "Filmes com foco em histórias de amor e relacionamentos." },
        { ID_Genero: 6, nome_genero: "Suspense", descricao: "Filmes que mantêm o espectador em constante tensão." },
        { ID_Genero: 7, nome_genero: "Terror", descricao: "Filmes com temática de medo e suspense." },
        { ID_Genero: 8, nome_genero: "Documentário", descricao: "Filmes que abordam temas reais e informativos." },
        { ID_Genero: 9, nome_genero: "Animação", descricao: "Filmes em formato de animação com histórias diversificadas." },
        { ID_Genero: 10, nome_genero: "Aventura", descricao: "Filmes com jornadas e descobertas emocionantes." }
    ],
    filmes: [
        { ID_Filme: 1, nome_filme: "Vingadores", classificacao: 12, nacionalidade: "EUA", lancamento: "2018-04-27", orcamento: 300000000, diretor_principal: "Anthony Russo", foto_filme: "vingadores.jpg" },
        { ID_Filme: 2, nome_filme: "O Diabo Veste Prada", classificacao: 12, nacionalidade: "EUA", lancamento: "2006-06-30", orcamento: 35000000, diretor_principal: "David Frankel", foto_filme: "diabo_prada.jpg" },
        { ID_Filme: 3, nome_filme: "Interestelar", classificacao: 10, nacionalidade: "EUA", lancamento: "2014-11-07", orcamento: 165000000, diretor_principal: "Christopher Nolan", foto_filme: "interestelar.jpg" },
        { ID_Filme: 4, nome_filme: "Titanic", classificacao: 14, nacionalidade: "EUA", lancamento: "1997-12-19", orcamento: 200000000, diretor_principal: "James Cameron", foto_filme: "titanic.jpg" },
        { ID_Filme: 5, nome_filme: "O Rei Leão", classificacao: 0, nacionalidade: "EUA", lancamento: "1994-06-15", orcamento: 45000000, diretor_principal: "Roger Allers", foto_filme: "rei_leao.jpg" },
        { ID_Filme: 6, nome_filme: "Matrix", classificacao: 14, nacionalidade: "EUA", lancamento: "1999-03-31", orcamento: 63000000, diretor_principal: "Lana Wachowski", foto_filme: "matrix.jpg" },
        { ID_Filme: 7, nome_filme: "Harry Potter e a Pedra Filosofal", classificacao: 0, nacionalidade: "EUA", lancamento: "2001-11-10", orcamento: 125000000, diretor_principal: "Chris Columbus", foto_filme: "harry_potter1.jpg" },
        { ID_Filme: 8, nome_filme: "O Senhor dos Anéis: A Sociedade do Anel", classificacao: 0, nacionalidade: "EUA", lancamento: "2001-12-19", orcamento: 93000000, diretor_principal: "Peter Jackson", foto_filme: "sociedade_anel.jpg" },
        { ID_Filme: 9, nome_filme: "Jurassic Park", classificacao: 12, nacionalidade: "EUA", lancamento: "1993-06-11", orcamento: 63000000, diretor_principal: "Steven Spielberg", foto_filme: "jurassic_park.jpg" },
        { ID_Filme: 10, nome_filme: "Piratas do Caribe: A Maldição do Pérola Negra", classificacao: 12, nacionalidade: "EUA", lancamento: "2003-07-09", orcamento: 140000000, diretor_principal: "Gore Verbinski", foto_filme: "piratas_caribe1.jpg" },
        { ID_Filme: 11, nome_filme: "A Origem", classificacao: 14, nacionalidade: "EUA", lancamento: "2010-07-16", orcamento: 160000000, diretor_principal: "Christopher Nolan", foto_filme: "a_origem.jpg" },
        { ID_Filme: 12, nome_filme: "Pantera Negra", classificacao: 12, nacionalidade: "EUA", lancamento: "2018-02-15", orcamento: 200000000, diretor_principal: "Ryan Coogler", foto_filme: "pantera_negra.jpg" },
        { ID_Filme: 13, nome_filme: "A Forma da Água", classificacao: 16, nacionalidade: "EUA", lancamento: "2017-12-01", orcamento: 19400000, diretor_principal: "Guillermo del Toro", foto_filme: "forma_agua.jpg" },
        { ID_Filme: 14, nome_filme: "Cisne Negro", classificacao: 18, nacionalidade: "EUA", lancamento: "2010-12-03", orcamento: 13000000, diretor_principal: "Darren Aronofsky", foto_filme: "cisne_negro.jpg" },
        { ID_Filme: 15, nome_filme: "Gravidade", classificacao: 12, nacionalidade: "EUA", lancamento: "2013-10-04", orcamento: 100000000, diretor_principal: "Alfonso Cuarón", foto_filme: "gravidade.jpg" },
        { ID_Filme: 16, nome_filme: "Os Incríveis", classificacao: 0, nacionalidade: "EUA", lancamento: "2004-11-05", orcamento: 92000000, diretor_principal: "Brad Bird", foto_filme: "os_incriveis.jpg" },
        { ID_Filme: 17, nome_filme: "Divertida Mente", classificacao: 0, nacionalidade: "EUA", lancamento: "2015-06-19", orcamento: 175000000, diretor_principal: "Pete Docter", foto_filme: "divertida_mente.jpg" },
        { ID_Filme: 18, nome_filme: "Coco", classificacao: 0, nacionalidade: "EUA", lancamento: "2017-10-27", orcamento: 175000000, diretor_principal: "Lee Unkrich", foto_filme: "coco.jpg" },
        { ID_Filme: 19, nome_filme: "Soul", classificacao: 0, nacionalidade: "EUA", lancamento: "2020-12-25", orcamento: 150000000, diretor_principal: "Pete Docter", foto_filme: "soul.jpg" },
        { ID_Filme: 20, nome_filme: "Encanto", classificacao: 0, nacionalidade: "EUA", lancamento: "2021-11-24", orcamento: 120000000, diretor_principal: "Jared Bush", foto_filme: "encanto.jpg" },
        { ID_Filme: 21, nome_filme: "Homem-Aranha: Sem Volta para Casa", classificacao: 12, nacionalidade: "EUA", lancamento: "2021-12-17", orcamento: 200000000, diretor_principal: "Jon Watts", foto_filme: "spider_man_nwh.jpg" },
        { ID_Filme: 22, nome_filme: "Oppenheimer", classificacao: 16, nacionalidade: "EUA", lancamento: "2023-07-20", orcamento: 100000000, diretor_principal: "Christopher Nolan", foto_filme: "oppenheimer.jpg" },
        { ID_Filme: 23, nome_filme: "Barbie", classificacao: 12, nacionalidade: "EUA", lancamento: "2023-07-21", orcamento: 145000000, diretor_principal: "Greta Gerwig", foto_filme: "barbie.jpg" },
        { ID_Filme: 24, nome_filme: "Duna", classificacao: 14, nacionalidade: "EUA", lancamento: "2021-10-22", orcamento: 165000000, diretor_principal: "Denis Villeneuve", foto_filme: "duna.jpg" },
        { ID_Filme: 25, nome_filme: "O Lobo de Wall Street", classificacao: 18, nacionalidade: "EUA", lancamento: "2013-12-25", orcamento: 100000000, diretor_principal: "Martin Scorsese", foto_filme: "lobo_wall_street.jpg" },
        { ID_Filme: 26, nome_filme: "A Rede Social", classificacao: 12, nacionalidade: "EUA", lancamento: "2010-10-01", orcamento: 40000000, diretor_principal: "David Fincher", foto_filme: "rede_social.jpg" },
        { ID_Filme: 27, nome_filme: "Os Oito Odiados", classificacao: 18, nacionalidade: "EUA", lancamento: "2015-12-25", orcamento: 44000000, diretor_principal: "Quentin Tarantino", foto_filme: "os_oito_odiados.jpg" },
        { ID_Filme: 28, nome_filme: "Pulp Fiction", classificacao: 18, nacionalidade: "EUA", lancamento: "1994-10-14", orcamento: 8000000, diretor_principal: "Quentin Tarantino", foto_filme: "pulp_fiction.jpg" },
        { ID_Filme: 29, nome_filme: "Gladiador", classificacao: 16, nacionalidade: "EUA", lancamento: "2000-05-05", orcamento: 103000000, diretor_principal: "Ridley Scott", foto_filme: "gladiador.jpg" },
        { ID_Filme: 30, nome_filme: "Coringa", classificacao: 16, nacionalidade: "EUA", lancamento: "2019-10-04", orcamento: 55000000, diretor_principal: "Todd Phillips", foto_filme: "coringa.jpg" },
        { ID_Filme: 31, nome_filme: "A Chegada", classificacao: 12, nacionalidade: "EUA", lancamento: "2016-11-11", orcamento: 47000000, diretor_principal: "Denis Villeneuve", foto_filme: "a_chegada.jpg" },
        { ID_Filme: 32, nome_filme: "O Grande Hotel Budapeste", classificacao: 14, nacionalidade: "EUA", lancamento: "2014-03-07", orcamento: 25000000, diretor_principal: "Wes Anderson", foto_filme: "hotel_budapeste.jpg" },
        { ID_Filme: 33, nome_filme: "Minari", classificacao: 10, nacionalidade: "EUA", lancamento: "2020-12-11", orcamento: 2000000, diretor_principal: "Lee Isaac Chung", foto_filme: "minari.jpg" },
        { ID_Filme: 34, nome_filme: "Roma", classificacao: 16, nacionalidade: "México", lancamento: "2018-11-21", orcamento: 15000000, diretor_principal: "Alfonso Cuarón", foto_filme: "roma.jpg" },
        { ID_Filme: 35, nome_filme: "Parasita", classificacao: 16, nacionalidade: "Coreia do Sul", lancamento: "2019-05-30", orcamento: 11400000, diretor_principal: "Bong Joon-ho", foto_filme: "parasita.jpg" },
        { ID_Filme: 36, nome_filme: "Train to Busan", classificacao: 16, nacionalidade: "Coreia do Sul", lancamento: "2016-07-20", orcamento: 8500000, diretor_principal: "Yeon Sang-ho", foto_filme: "train_busan.jpg" },
        { ID_Filme: 37, nome_filme: "O Jogo da Imitação", classificacao: 12, nacionalidade: "Reino Unido", lancamento: "2014-11-14", orcamento: 14000000, diretor_principal: "Morten Tyldum", foto_filme: "jogo_imitacao.jpg" },
        { ID_Filme: 38, nome_filme: "O Discurso do Rei", classificacao: 12, nacionalidade: "Reino Unido", lancamento: "2010-11-26", orcamento: 15000000, diretor_principal: "Tom Hooper", foto_filme: "discurso_rei.jpg" },
        { ID_Filme: 39, nome_filme: "O Menino que Descobriu o Vento", classificacao: 10, nacionalidade: "Malawi", lancamento: "2019-01-25", orcamento: 8000000, diretor_principal: "Chiwetel Ejiofor", foto_filme: "menino_vento.jpg" },
        { ID_Filme: 40, nome_filme: "Moonlight", classificacao: 16, nacionalidade: "EUA", lancamento: "2016-10-21", orcamento: 4000000, diretor_principal: "Barry Jenkins", foto_filme: "moonlight.jpg" },
        { ID_Filme: 41, nome_filme: "Green Book", classificacao: 12, nacionalidade: "EUA", lancamento: "2018-11-16", orcamento: 23000000, diretor_principal: "Peter Farrelly", foto_filme: "green_book.jpg" },
        { ID_Filme: 42, nome_filme: "A Teoria de Tudo", classificacao: 12, nacionalidade: "Reino Unido", lancamento: "2014-11-07", orcamento: 15000000, diretor_principal: "James Marsh", foto_filme: "teoria_tudo.jpg" },
        { ID_Filme: 43, nome_filme: "Whiplash", classificacao: 16, nacionalidade: "EUA", lancamento: "2014-10-10", orcamento: 3300000, diretor_principal: "Damien Chazelle", foto_filme: "whiplash.jpg" },
        { ID_Filme: 44, nome_filme: "La La Land", classificacao: 12, nacionalidade: "EUA", lancamento: "2016-12-09", orcamento: 30000000, diretor_principal: "Damien Chazelle", foto_filme: "la_la_land.jpg" },
        { ID_Filme: 45, nome_filme: "O Regresso", classificacao: 18, nacionalidade: "EUA", lancamento: "2015-12-25", orcamento: 135000000, diretor_principal: "Alejandro G. Iñárritu", foto_filme: "regresso.jpg" },
        { ID_Filme: 46, nome_filme: "Spotlight", classificacao: 16, nacionalidade: "EUA", lancamento: "2015-11-06", orcamento: 20000000, diretor_principal: "Tom McCarthy", foto_filme: "spotlight.jpg" },
        { ID_Filme: 47, nome_filme: "Era Uma Vez em... Hollywood", classificacao: 16, nacionalidade: "EUA", lancamento: "2019-07-26", orcamento: 90000000, diretor_principal: "Quentin Tarantino", foto_filme: "once_hollywood.jpg" },
        { ID_Filme: 48, nome_filme: "1917", classificacao: 16, nacionalidade: "Reino Unido", lancamento: "2019-12-25", orcamento: 95000000, diretor_principal: "Sam Mendes", foto_filme: "1917.jpg" },
        {ID_Filme: 49, nome_filme: "Bohemian Rhapsody", classificacao: 14, nacionalidade: "Reino Unido", lancamento: "2018-10-24", orcamento: 52000000, diretor_principal: "Bryan Singer", foto_filme: "bohemian_rhapsody.jpg"},
        { ID_Filme: 50, nome_filme: "Rocketman", classificacao: 16, nacionalidade: "Reino Unido", lancamento: "2019-05-22", orcamento: 40000000, diretor_principal: "Dexter Fletcher", foto_filme: "rocketman.jpg"}
    ],
    elenco: [
        {ID_Elenco: 1, nome: "Robert Downey Jr."},
        {ID_Elenco: 2, nome: "Meryl Streep"},
        {ID_Elenco: 3, nome: "Matthew McConaughey"},
        {ID_Elenco: 4, nome: "Leonardo DiCaprio"},
        {ID_Elenco: 5, nome: "Matthew Broderick"},
        {ID_Elenco: 6, nome: "Johnny Depp"},
        {ID_Elenco: 7, nome: "Emma Watson"},
        {ID_Elenco: 8, nome: "Orlando Bloom"},
        {ID_Elenco: 9, nome: "Will Smith"},
        {ID_Elenco: 10, nome: "Angelina Jolie"},
        {ID_Elenco: 11, nome: "Tom Holland"},
        {ID_Elenco: 12, nome: "Zendaya"},
        {ID_Elenco: 13, nome: "Benedict Cumberbatch"},
        {ID_Elenco: 14, nome: "Florence Pugh"},
        {ID_Elenco: 15, nome: "Timothée Chalamet"},
        {ID_Elenco: 16, nome: "Scarlett Johansson"},
        {ID_Elenco: 17, nome: "Chris Evans"},
        {ID_Elenco: 18, nome: "Ryan Gosling"},
        {ID_Elenco: 19, nome: "Emma Stone"},
        {ID_Elenco: 20, nome: "Anne Hathaway"},
        {ID_Elenco: 21, nome: "Joaquin Phoenix"},
        {ID_Elenco: 22, nome: "Margot Robbie"},
        {ID_Elenco: 23, nome: "Daniel Kaluuya"},
        {ID_Elenco: 24, nome: "Lupita Nyong o"},
        {ID_Elenco: 25, nome: "Denzel Washington"},
        {ID_Elenco: 26, nome: "Viola Davis"},
        {ID_Elenco: 27, nome: "Christian Bale"},
        {ID_Elenco: 28, nome: "Natalie Portman"},
        {ID_Elenco: 29, nome: "Tom Hardy"},
        {ID_Elenco: 30, nome: "Gal Gadot"},
        {ID_Elenco: 31, nome: "Jason Momoa"},
        {ID_Elenco: 32, nome: "Henry Cavill"},
        {ID_Elenco: 33, nome: "Amy Adams"},
        {ID_Elenco: 34, nome: "Jake Gyllenhaal"},
        {ID_Elenco: 35, nome: "Hugh Jackman"},
        {ID_Elenco: 36, nome: "Jessica Chastain"},
        {ID_Elenco: 37, nome: "Michael B. Jordan"},
        {ID_Elenco: 38, nome: "Brie Larson"},
        {ID_Elenco: 39, nome: "Tilda Swinton"},
        {ID_Elenco: 40, nome: "Idris Elba"},
        {ID_Elenco: 41, nome: "Pedro Pascal"},
        {ID_Elenco: 42, nome: "Anya Taylor-Joy"},
        {ID_Elenco: 43, nome: "Paul Mescal"},
        {ID_Elenco: 44, nome: "Robert Pattinson"},
        {ID_Elenco: 45, nome: "Kristen Stewart"},
        {ID_Elenco: 46, nome: "Austin Butler"},
        {ID_Elenco: 47, nome: "Cate Blanchett"},
        {ID_Elenco: 48, nome: "Saoirse Ronan"},
        {ID_Elenco: 49, nome: "Dev Patel"},
        {ID_Elenco: 50, nome: "Millie Bobby Brown"},
        {ID_Elenco: 51, nome: "Margot Robbie"},
        {ID_Elenco: 52, nome: "Daniel Kaluuya"},
        {ID_Elenco: 53, nome: "Lupita Nyong o"},
        {ID_Elenco: 54, nome: "Denzel Washington"},
        {ID_Elenco: 55, nome: "Viola Davis"},
        {ID_Elenco: 56, nome: "Christian Bale"},
        {ID_Elenco: 57, nome: "Natalie Portman"},
        {ID_Elenco: 58, nome: "Tom Hardy"},
        {ID_Elenco: 59, nome: "Gal Gadot"},
        {ID_Elenco: 60, nome: "Jason Momoa"},
        {ID_Elenco: 61, nome: "Henry Cavill"},
        {ID_Elenco: 62, nome: "Amy Adams"},
        {ID_Elenco: 63, nome: "Jake Gyllenhaal"},
        {ID_Elenco: 64, nome: "Hugh Jackman"},
        {ID_Elenco: 65, nome: "Jessica Chastain"},
        {ID_Elenco: 66, nome: "Michael B. Jordan"},
        {ID_Elenco: 67, nome: "Brie Larson"},
        {ID_Elenco: 68, nome: "Tilda Swinton"},
        {ID_Elenco: 69, nome: "Idris Elba"},
        {ID_Elenco: 70, nome: "Pedro Pascal"},
        {ID_Elenco: 71, nome: "Anya Taylor-Joy"},
        {ID_Elenco: 72, nome: "Paul Mescal"},
        {ID_Elenco: 73, nome: "Robert Pattinson"},
        {ID_Elenco: 74, nome: "Kristen Stewart"},
        {ID_Elenco: 75, nome: "Austin Butler"},
        {ID_Elenco: 76, nome: "Cate Blanchett"},
        {ID_Elenco: 77, nome: "Saoirse Ronan"},
        {ID_Elenco: 78, nome: "Dev Patel"},
        {ID_Elenco: 79, nome: "Millie Bobby Brown"},
        {ID_Elenco: 80, nome: "Tom Holland"},
        {ID_Elenco: 81, nome: "Zendaya"},
        {ID_Elenco: 82, nome: "Benedict Cumberbatch"},
        {ID_Elenco: 83, nome: "Florence Pugh"},
        {ID_Elenco: 84, nome: "Timothée Chalamet"},
        {ID_Elenco: 85, nome: "Scarlett Johansson"},
        {ID_Elenco: 86, nome: "Chris Evans"},
        {ID_Elenco: 87, nome: "Ryan Gosling"},
        {ID_Elenco: 88, nome: "Emma Stone"},
        {ID_Elenco: 89, nome: "Anne Hathaway"},
        {ID_Elenco: 90, nome: "Joaquin Phoenix"},
        {ID_Elenco: 91, nome: "Margot Robbie"},
        {ID_Elenco: 92, nome: "Daniel Kaluuya"},
        {ID_Elenco: 93, nome: "Lupita Nyong o"},
        {ID_Elenco: 94, nome: "Denzel Washington"},
        {ID_Elenco: 95, nome: "Viola Davis"},
        {ID_Elenco: 96, nome: "Christian Bale"},
        {ID_Elenco: 97, nome: "Natalie Portman"},
        {ID_Elenco: 98, nome: "Tom Hardy"},
        {ID_Elenco: 99, nome: "Gal Gadot"},
        {ID_Elenco: 100, nome: "Jason Momoa"}
    ],
    tipo_elenco: [
        { ID_TipoElenco: 1, descricao_elenco: "Ator Principal" },
        { ID_TipoElenco: 2, descricao_elenco: "Ator Coadjuvante" },
        { ID_TipoElenco: 3, descricao_elenco: "Atriz Principal" },
        { ID_TipoElenco: 4, descricao_elenco: "Atriz Coadjuvante" },
        { ID_TipoElenco: 5, descricao_elenco: "Figuração" },
        { ID_TipoElenco: 6, descricao_elenco: "Dublador" },
        { ID_TipoElenco: 7, descricao_elenco: "Comediante" },
        { ID_TipoElenco: 8, descricao_elenco: "Vilão" },
        { ID_TipoElenco: 9, descricao_elenco: "Protagonista" },
        { ID_TipoElenco: 10, descricao_elenco: "Antagonista" }
    ],
    plano: [
        { ID_Plano: 1, tipo_plano: "Básico", valor: 19.90 },
        { ID_Plano: 2, tipo_plano: "Familia", valor: 119.90 },
        { ID_Plano: 3, tipo_plano: "Premium", valor: 49.90 }
    ],
    usuario: [
        {
            ID_Usuario: 1,
            senha: "senha123",
            email: "clara.lindeman@email.com",
            CPF: "82345678901",
            telefone: "(11) 98765-4321",
            data_nascimento: "1990-05-15",
            sexo: "F",
            status_usuario: true,
            nome: "Clara Lindeman"
        },
        {
            ID_Usuario: 2,
            senha: "senha123",
            email: "vitoria.sophia@email.com",
            CPF: "23454789012",
            telefone: "(21) 91234-5678",
            data_nascimento: "1992-08-20",
            sexo: "F",
            status_usuario: true,
            nome: "Vitoria Sophia"
        },
        {
            ID_Usuario: 3,
            senha: "senha123",
            email: "alejandro.acelino@email.com",
            CPF: "34567890123",
            telefone: "(31) 93456-7890",
            data_nascimento: "1994-12-05",
            sexo: "M",
            status_usuario: true,
            nome: "Alejandro Acelino"
        },
        {
            ID_Usuario: 4,
            senha: "senha123",
            email: "davi.rodovalho@email.com",
            CPF: "46678901234",
            telefone: "(41) 94567-8901",
            data_nascimento: "1991-11-13",
            sexo: "M",
            status_usuario: true,
            nome: "Davi Rodovalho"
        },
        {
            ID_Usuario: 5,
            senha: "senha123",
            email: "lucas.mercado@email.com",
            CPF: "56799012345",
            telefone: "(61) 90567-8901",
            data_nascimento: "1989-03-10",
            sexo: "M",
            status_usuario: true,
            nome: "Lucas Mercado"
        },
        {
            ID_Usuario: 6,
            senha: "senha123",
            email: "enzo.ribeiro@email.com",
            CPF: "61890123456",
            telefone: "(71) 96678-9012",
            data_nascimento: "1995-02-25",
            sexo: "M",
            status_usuario: true,
            nome: "Enzo Ribeiro"
        },
        {
            ID_Usuario: 7,
            senha: "senha123",
            email: "rebecca.peres@email.com",
            CPF: "78901234567",
            telefone: "(85) 97689-0123",
            data_nascimento: "1993-06-18",
            sexo: "F",
            status_usuario: true,
            nome: "Rebecca Peres"
        },
        {
            ID_Usuario: 8,
            senha: "senha123",
            email: "adan.richard@email.com",
            CPF: "89012347678",
            telefone: "(91) 98765-4321",
            data_nascimento: "1996-07-22",
            sexo: "M",
            status_usuario: true,
            nome: "Adan Richard"
        },
        {
            ID_Usuario: 9,
            senha: "senha123",
            email: "enzo.rosa@email.com",
            CPF: "90122456789",
            telefone: "(51) 98876-5432",
            data_nascimento: "1997-01-30",
            sexo: "M",
            status_usuario: true,
            nome: "Enzo Rosa"
        },
        {
            ID_Usuario: 10,
            senha: "senha123",
            email: "enzo.budrys@email.com",
            CPF: "01934567890",
            telefone: "(21) 99887-6543",
            data_nascimento: "1998-09-09",
            sexo: "M",
            status_usuario: true,
            nome: "Enzo Budrys"
        }
    ],
    perfil: [
        { ID_Perfil: 1, nome_perfil: "Filho", classificacao_perfil: 0, ID_Usuario: 1, foto_perfil: "img/fotos_perfil/ft1.jpeg" },
  { ID_Perfil: 3, nome_perfil: "Vitoria", classificacao_perfil: 16, ID_Usuario: 3, foto_perfil: "img/fotos_perfil/ft3.jpeg" },
  { ID_Perfil: 4, nome_perfil: "Dudinha", classificacao_perfil: 0, ID_Usuario: 4, foto_perfil: "img/fotos_perfil/ft4.jpeg" },
  { ID_Perfil: 5, nome_perfil: "Mae", classificacao_perfil: 18, ID_Usuario: 5, foto_perfil: "img/fotos_perfil/ft5.jpeg" },
  { ID_Perfil: 6, nome_perfil: "Enzao", classificacao_perfil: 12, ID_Usuario: 6, foto_perfil: "img/fotos_perfil/ft6.jpeg" },
  { ID_Perfil: 7, nome_perfil: "Davi", classificacao_perfil: 14, ID_Usuario: 7, foto_perfil: "img/fotos_perfil/ft7.jpeg" },
  { ID_Perfil: 8, nome_perfil: "Joao", classificacao_perfil: 10, ID_Usuario: 8, foto_perfil: "img/fotos_perfil/ft8.jpeg" },
  { ID_Perfil: 9, nome_perfil: "Meu Bebe", classificacao_perfil: 0, ID_Usuario: 9, foto_perfil: "img/fotos_perfil/ft9.jpeg" },
  { ID_Perfil: 10, nome_perfil: "Pai", classificacao_perfil: 18, ID_Usuario: 10, foto_perfil: "img/fotos_perfil/ft10.jpeg" },
  { ID_Perfil: 11, nome_perfil: "Clarinha", classificacao_perfil: 12, ID_Usuario: 1, foto_perfil: "img/fotos_perfil/ft11.jpeg" },
  { ID_Perfil: 12, nome_perfil: "Henrique", classificacao_perfil: 18, ID_Usuario: 2, foto_perfil: "img/fotos_perfil/ft12.jpeg" },
  { ID_Perfil: 13, nome_perfil: "Soso", classificacao_perfil: 14, ID_Usuario: 3, foto_perfil: "img/fotos_perfil/ft13.jpeg" },
  { ID_Perfil: 14, nome_perfil: "Cadu", classificacao_perfil: 18, ID_Usuario: 4, foto_perfil: "img/fotos_perfil/ft14.jpeg" },
  { ID_Perfil: 15, nome_perfil: "Ribeiro", classificacao_perfil: 12, ID_Usuario: 5, foto_perfil: "img/fotos_perfil/ft15.jpeg" },
  { ID_Perfil: 16, nome_perfil: "Eric", classificacao_perfil: 10, ID_Usuario: 6, foto_perfil: "img/fotos_perfil/ft16.jpeg" },
  { ID_Perfil: 17, nome_perfil: "Rebeca", classificacao_perfil: 16, ID_Usuario: 7, foto_perfil: "img/fotos_perfil/ft17.jpeg" },
  { ID_Perfil: 18, nome_perfil: "Beatriz", classificacao_perfil: 18, ID_Usuario: 8, foto_perfil: "img/fotos_perfil/ft18.jpeg" },
  { ID_Perfil: 19, nome_perfil: "Felipe", classificacao_perfil: 12, ID_Usuario: 9, foto_perfil: "img/fotos_perfil/ft19.jpeg" },
  { ID_Perfil: 20, nome_perfil: "Dudu", classificacao_perfil: 14, ID_Usuario: 10, foto_perfil: "img/fotos_perfil/ft1.jpeg" },
  { ID_Perfil: 21, nome_perfil: "Lucas", classificacao_perfil: 15, ID_Usuario: 1, foto_perfil: "img/fotos_perfil/ft2.jpeg" },
  { ID_Perfil: 22, nome_perfil: "Mariana", classificacao_perfil: 13, ID_Usuario: 2, foto_perfil: "img/fotos_perfil/ft3.jpeg" },
  { ID_Perfil: 23, nome_perfil: "Pedro", classificacao_perfil: 16, ID_Usuario: 3, foto_perfil: "img/fotos_perfil/ft4.jpeg" },
  { ID_Perfil: 24, nome_perfil: "Ana", classificacao_perfil: 11, ID_Usuario: 4, foto_perfil: "img/fotos_perfil/ft5.jpeg" },
  { ID_Perfil: 25, nome_perfil: "Carla", classificacao_perfil: 17, ID_Usuario: 5, foto_perfil: "img/fotos_perfil/ft6.jpeg" },
  { ID_Perfil: 26, nome_perfil: "Bruno", classificacao_perfil: 14, ID_Usuario: 6, foto_perfil: "img/fotos_perfil/ft7.jpeg" },
  { ID_Perfil: 27, nome_perfil: "Fernanda", classificacao_perfil: 12, ID_Usuario: 7, foto_perfil: "img/fotos_perfil/ft8.jpeg" },
  { ID_Perfil: 28, nome_perfil: "Gustavo", classificacao_perfil: 13, ID_Usuario: 8, foto_perfil: "img/fotos_perfil/ft9.jpeg" },
  { ID_Perfil: 29, nome_perfil: "Julia", classificacao_perfil: 15, ID_Usuario: 9, foto_perfil: "img/fotos_perfil/ft10.jpeg" },
  { ID_Perfil: 30, nome_perfil: "Rodrigo", classificacao_perfil: 14, ID_Usuario: 10, foto_perfil: "img/fotos_perfil/ft11.jpeg" },
  { ID_Perfil: 31, nome_perfil: "Amanda", classificacao_perfil: 12, ID_Usuario: 1, foto_perfil: "img/fotos_perfil/ft12.jpeg" },
  { ID_Perfil: 32, nome_perfil: "Tiago", classificacao_perfil: 16, ID_Usuario: 2, foto_perfil: "img/fotos_perfil/ft13.jpeg" },
  { ID_Perfil: 33, nome_perfil: "Patricia", classificacao_perfil: 13, ID_Usuario: 3, foto_perfil: "img/fotos_perfil/ft14.jpeg" },
  { ID_Perfil: 34, nome_perfil: "Diego", classificacao_perfil: 15, ID_Usuario: 4, foto_perfil: "img/fotos_perfil/ft15.jpeg" },
  { ID_Perfil: 35, nome_perfil: "Camila", classificacao_perfil: 17, ID_Usuario: 5, foto_perfil: "img/fotos_perfil/ft16.jpeg" },
  { ID_Perfil: 36, nome_perfil: "Marcelo", classificacao_perfil: 11, ID_Usuario: 6, foto_perfil: "img/fotos_perfil/ft17.jpeg" },
  { ID_Perfil: 37, nome_perfil: "Sandra", classificacao_perfil: 14, ID_Usuario: 7, foto_perfil: "img/fotos_perfil/ft18.jpeg" },
  { ID_Perfil: 38, nome_perfil: "Rafael", classificacao_perfil: 12, ID_Usuario: 8, foto_perfil: "img/fotos_perfil/ft19.jpeg" },
  { ID_Perfil: 39, nome_perfil: "Isabela", classificacao_perfil: 16, ID_Usuario: 9, foto_perfil: "img/fotos_perfil/ft1.jpeg" },
  { ID_Perfil: 40, nome_perfil: "Felipe", classificacao_perfil: 15, ID_Usuario: 10, foto_perfil: "img/fotos_perfil/ft2.jpeg" },
  { ID_Perfil: 41, nome_perfil: "Elisa", classificacao_perfil: 13, ID_Usuario: 1, foto_perfil: "img/fotos_perfil/ft3.jpeg" },
  { ID_Perfil: 42, nome_perfil: "Andre", classificacao_perfil: 14, ID_Usuario: 2, foto_perfil: "img/fotos_perfil/ft4.jpeg" },
  { ID_Perfil: 43, nome_perfil: "Vanessa", classificacao_perfil: 12, ID_Usuario: 3, foto_perfil: "img/fotos_perfil/ft5.jpeg" },
  { ID_Perfil: 44, nome_perfil: "Victor", classificacao_perfil: 15, ID_Usuario: 4, foto_perfil: "img/fotos_perfil/ft6.jpeg" },
  { ID_Perfil: 45, nome_perfil: "Juliana", classificacao_perfil: 17, ID_Usuario: 5, foto_perfil: "img/fotos_perfil/ft7.jpeg" },
  { ID_Perfil: 46, nome_perfil: "Carlos", classificacao_perfil: 14, ID_Usuario: 6, foto_perfil: "img/fotos_perfil/ft8.jpeg" },
  { ID_Perfil: 47, nome_perfil: "Renata", classificacao_perfil: 13, ID_Usuario: 7, foto_perfil: "img/fotos_perfil/ft9.jpeg" },
  { ID_Perfil: 48, nome_perfil: "Lucas", classificacao_perfil: 12, ID_Usuario: 8, foto_perfil: "img/fotos_perfil/ft10.jpeg" },
  { ID_Perfil: 49, nome_perfil: "Marcela", classificacao_perfil: 16, ID_Usuario: 9, foto_perfil: "img/fotos_perfil/ft11.jpeg" },
  { ID_Perfil: 50, nome_perfil: "Joao", classificacao_perfil: 15, ID_Usuario: 10, foto_perfil: "img/fotos_perfil/ft12.jpeg" }
],
    assinatura_Plano: [
        {
            ID_Assinatura: 1,
            tipo_pagamento: "Cartão de Crédito",
            data_assinatura: "2025-06-01",
            status_assinatura: true,
            ID_Plano: 1,
            ID_Usuario: 1
        },
        {
            ID_Assinatura: 2,
            tipo_pagamento: "Boleto",
            data_assinatura: "2025-06-10",
            status_assinatura: true,
            ID_Plano: 3,
            ID_Usuario: 2
        },
        {
            ID_Assinatura: 3,
            tipo_pagamento: "Pix",
            data_assinatura: "2025-06-15",
            status_assinatura: true,
            ID_Plano: 2,
            ID_Usuario: 3
        },
        {
            ID_Assinatura: 4,
            tipo_pagamento: "Cartão de Crédito",
            data_assinatura: "2025-06-20",
            status_assinatura: false,
            ID_Plano: 3,
            ID_Usuario: 4
        },
        {
            ID_Assinatura: 5,
            tipo_pagamento: "Boleto",
            data_assinatura: "2025-07-01",
            status_assinatura: true,
            ID_Plano: 1,
            ID_Usuario: 5
        },
        {
            ID_Assinatura: 6,
            tipo_pagamento: "Pix",
            data_assinatura: "2025-07-05",
            status_assinatura: true,
            ID_Plano: 2,
            ID_Usuario: 6
        },
        {
            ID_Assinatura: 7,
            tipo_pagamento: "Cartão de Crédito",
            data_assinatura: "2025-07-12",
            status_assinatura: true,
            ID_Plano: 3,
            ID_Usuario: 7
        },
        {
            ID_Assinatura: 8,
            tipo_pagamento: "Pix",
            data_assinatura: "2025-07-18",
            status_assinatura: false,
            ID_Plano: 1,
            ID_Usuario: 8
        },
        {
            ID_Assinatura: 9,
            tipo_pagamento: "Boleto",
            data_assinatura: "2025-07-25",
            status_assinatura: true,
            ID_Plano: 2,
            ID_Usuario: 9
        },
        {
            ID_Assinatura: 10,
            tipo_pagamento: "Cartão de Crédito",
            data_assinatura: "2025-08-01",
            status_assinatura: true,
            ID_Plano: 1,
            ID_Usuario: 10
        }
    ],
    Filme_Genero : [
        {ID_Filme_Genero: 1, ID_Genero: 1, ID_Filme: 1},
        {ID_Filme_Genero: 2, ID_Genero: 2, ID_Filme: 2},
        {ID_Filme_Genero: 3, ID_Genero: 3, ID_Filme: 3},
        {ID_Filme_Genero: 4, ID_Genero: 4, ID_Filme: 3},
        {ID_Filme_Genero: 5, ID_Genero: 5, ID_Filme: 4},
        {ID_Filme_Genero: 6, ID_Genero: 6, ID_Filme: 5},
        {ID_Filme_Genero: 7, ID_Genero: 7, ID_Filme: 6},
        {ID_Filme_Genero: 8, ID_Genero: 8, ID_Filme: 7},
        {ID_Filme_Genero: 9, ID_Genero: 9, ID_Filme: 8},
        {ID_Filme_Genero: 10, ID_Genero: 10, ID_Filme: 9},
        {ID_Filme_Genero: 11, ID_Genero: 1, ID_Filme: 11},
        {ID_Filme_Genero: 12, ID_Genero: 4, ID_Filme: 11},
        {ID_Filme_Genero: 13, ID_Genero: 2, ID_Filme: 12},
        {ID_Filme_Genero: 14, ID_Genero: 5, ID_Filme: 13},
        {ID_Filme_Genero: 15, ID_Genero: 4, ID_Filme: 14},
        {ID_Filme_Genero: 16, ID_Genero: 6, ID_Filme: 15},
        {ID_Filme_Genero: 17, ID_Genero: 3, ID_Filme: 16},
        {ID_Filme_Genero: 18, ID_Genero: 9, ID_Filme: 17},
        {ID_Filme_Genero: 19, ID_Genero: 9, ID_Filme: 18},
        {ID_Filme_Genero: 20, ID_Genero: 9, ID_Filme: 19},
        {ID_Filme_Genero: 21, ID_Genero: 9, ID_Filme: 20},
        {ID_Filme_Genero: 22, ID_Genero: 1, ID_Filme: 21},
        {ID_Filme_Genero: 23, ID_Genero: 4, ID_Filme: 22},
        {ID_Filme_Genero: 24, ID_Genero: 3, ID_Filme: 23},
        {ID_Filme_Genero: 25, ID_Genero: 2, ID_Filme: 24},
        {ID_Filme_Genero: 26, ID_Genero: 5, ID_Filme: 25},
        {ID_Filme_Genero: 27, ID_Genero: 6, ID_Filme: 26},
        {ID_Filme_Genero: 28, ID_Genero: 6, ID_Filme: 27},
        {ID_Filme_Genero: 29, ID_Genero: 1, ID_Filme: 28},
        {ID_Filme_Genero: 30, ID_Genero: 5, ID_Filme: 29},
        {ID_Filme_Genero: 31, ID_Genero: 3, ID_Filme: 30},
        {ID_Filme_Genero: 32, ID_Genero: 4, ID_Filme: 31},
        {ID_Filme_Genero: 33, ID_Genero: 2, ID_Filme: 32},
        {ID_Filme_Genero: 34, ID_Genero: 3, ID_Filme: 33},
        {ID_Filme_Genero: 35, ID_Genero: 3, ID_Filme: 34},
        {ID_Filme_Genero: 36, ID_Genero: 3, ID_Filme: 35},
        {ID_Filme_Genero: 37, ID_Genero: 7, ID_Filme: 36},
        {ID_Filme_Genero: 38, ID_Genero: 6, ID_Filme: 37},
        {ID_Filme_Genero: 39, ID_Genero: 3, ID_Filme: 38},
        {ID_Filme_Genero: 40, ID_Genero: 8, ID_Filme: 39},
        {ID_Filme_Genero: 41, ID_Genero: 3, ID_Filme: 40},
        {ID_Filme_Genero: 42, ID_Genero: 3, ID_Filme: 41},
        {ID_Filme_Genero: 43, ID_Genero: 3, ID_Filme: 42},
        {ID_Filme_Genero: 44, ID_Genero: 3, ID_Filme: 43},
        {ID_Filme_Genero: 45, ID_Genero: 5, ID_Filme: 44},
        {ID_Filme_Genero: 46, ID_Genero: 1, ID_Filme: 45},
        {ID_Filme_Genero: 47, ID_Genero: 3, ID_Filme: 46},
        {ID_Filme_Genero: 48, ID_Genero: 1, ID_Filme: 47},
        {ID_Filme_Genero: 49, ID_Genero: 1, ID_Filme: 48},
        {ID_Filme_Genero: 50, ID_Genero: 5, ID_Filme: 49},
        {ID_Filme_Genero: 51, ID_Genero: 5, ID_Filme: 50}
    ],
    atuacao_elenco: [
        {ID_atuacaoelenco: 1, ID_Filme: 1, ID_TipoElenco: 1, ID_Elenco: 1},
        {ID_atuacaoelenco: 2, ID_Filme: 1, ID_TipoElenco: 2, ID_Elenco: 16},
        {ID_atuacaoelenco: 3, ID_Filme: 1, ID_TipoElenco: 2, ID_Elenco: 17},
        {ID_atuacaoelenco: 4, ID_Filme: 2, ID_TipoElenco: 3, ID_Elenco: 2},
        {ID_atuacaoelenco: 5, ID_Filme: 2, ID_TipoElenco: 4, ID_Elenco: 20},
        {ID_atuacaoelenco: 6, ID_Filme: 3, ID_TipoElenco: 1, ID_Elenco: 3},
        {ID_atuacaoelenco: 7, ID_Filme: 3, ID_TipoElenco: 4, ID_Elenco: 33},
        {ID_atuacaoelenco: 8, ID_Filme: 4, ID_TipoElenco: 1, ID_Elenco: 4},
        {ID_atuacaoelenco: 9, ID_Filme: 4, ID_TipoElenco: 3, ID_Elenco: 19},
        {ID_atuacaoelenco: 10, ID_Filme: 5, ID_TipoElenco: 6, ID_Elenco: 5},
        {ID_atuacaoelenco: 11, ID_Filme: 5, ID_TipoElenco: 6, ID_Elenco: 50},
        {ID_atuacaoelenco: 12, ID_Filme: 6, ID_TipoElenco: 1, ID_Elenco: 6},
        {ID_atuacaoelenco: 13, ID_Filme: 6, ID_TipoElenco: 2, ID_Elenco: 29},
        {ID_atuacaoelenco: 14, ID_Filme: 7, ID_TipoElenco: 3, ID_Elenco: 7},
        {ID_atuacaoelenco: 15, ID_Filme: 7, ID_TipoElenco: 1, ID_Elenco: 11},
        {ID_atuacaoelenco: 16, ID_Filme: 8, ID_TipoElenco: 1, ID_Elenco: 8},
        {ID_atuacaoelenco: 17, ID_Filme: 8, ID_TipoElenco: 4, ID_Elenco: 47},
        {ID_atuacaoelenco: 18, ID_Filme: 9, ID_TipoElenco: 1, ID_Elenco: 9},
        {ID_atuacaoelenco: 19, ID_Filme: 9, ID_TipoElenco: 2, ID_Elenco: 31},
        {ID_atuacaoelenco: 20, ID_Filme: 10, ID_TipoElenco: 1, ID_Elenco: 6},
        {ID_atuacaoelenco: 21, ID_Filme: 10, ID_TipoElenco: 8, ID_Elenco: 30},
        {ID_atuacaoelenco: 22, ID_Filme: 11, ID_TipoElenco: 1, ID_Elenco: 13},
        {ID_atuacaoelenco: 23, ID_Filme: 11, ID_TipoElenco: 3, ID_Elenco: 38},
        {ID_atuacaoelenco: 24, ID_Filme: 12, ID_TipoElenco: 1, ID_Elenco: 23},
        {ID_atuacaoelenco: 25, ID_Filme: 12, ID_TipoElenco: 3, ID_Elenco: 24},
        {ID_atuacaoelenco: 26, ID_Filme: 13, ID_TipoElenco: 3, ID_Elenco: 39},
        {ID_atuacaoelenco: 27, ID_Filme: 13, ID_TipoElenco: 4, ID_Elenco: 36},
        {ID_atuacaoelenco: 28, ID_Filme: 14, ID_TipoElenco: 3, ID_Elenco: 20},
        {ID_atuacaoelenco: 29, ID_Filme: 14, ID_TipoElenco: 1, ID_Elenco: 21},
        {ID_atuacaoelenco: 30, ID_Filme: 15, ID_TipoElenco: 3, ID_Elenco: 16},
        {ID_atuacaoelenco: 31, ID_Filme: 15, ID_TipoElenco: 2, ID_Elenco: 18},
        {ID_atuacaoelenco: 32, ID_Filme: 16, ID_TipoElenco: 6, ID_Elenco: 38},
        {ID_atuacaoelenco: 33, ID_Filme: 16, ID_TipoElenco: 6, ID_Elenco: 50},
        {ID_atuacaoelenco: 34, ID_Filme: 17, ID_TipoElenco: 6, ID_Elenco: 38},
        {ID_atuacaoelenco: 35, ID_Filme: 17, ID_TipoElenco: 6, ID_Elenco: 39},
        {ID_atuacaoelenco: 36, ID_Filme: 18, ID_TipoElenco: 6, ID_Elenco: 40},
        {ID_atuacaoelenco: 37, ID_Filme: 18, ID_TipoElenco: 6, ID_Elenco: 41},
        {ID_atuacaoelenco: 38, ID_Filme: 19, ID_TipoElenco: 6, ID_Elenco: 41},
        {ID_atuacaoelenco: 39, ID_Filme: 19, ID_TipoElenco: 6, ID_Elenco: 42},
        {ID_atuacaoelenco: 40, ID_Filme: 20, ID_TipoElenco: 6, ID_Elenco: 43},
        {ID_atuacaoelenco: 41, ID_Filme: 20, ID_TipoElenco: 6, ID_Elenco: 44},
        {ID_atuacaoelenco: 42, ID_Filme: 21, ID_TipoElenco: 1, ID_Elenco: 11},
        {ID_atuacaoelenco: 43, ID_Filme: 21, ID_TipoElenco: 3, ID_Elenco: 12},
        {ID_atuacaoelenco: 44, ID_Filme: 22, ID_TipoElenco: 1, ID_Elenco: 15},
        {ID_atuacaoelenco: 45, ID_Filme: 22, ID_TipoElenco: 2, ID_Elenco: 44},
        {ID_atuacaoelenco: 46, ID_Filme: 23, ID_TipoElenco: 3, ID_Elenco: 22},
        {ID_atuacaoelenco: 47, ID_Filme: 23, ID_TipoElenco: 4, ID_Elenco: 45},
        {ID_atuacaoelenco: 48, ID_Filme: 24, ID_TipoElenco: 1, ID_Elenco: 15},
        {ID_atuacaoelenco: 49, ID_Filme: 24, ID_TipoElenco: 2, ID_Elenco: 42},
        {ID_atuacaoelenco: 50, ID_Filme: 25, ID_TipoElenco: 1, ID_Elenco: 4},
        {ID_atuacaoelenco: 51, ID_Filme: 1, ID_TipoElenco: 2, ID_Elenco: 51},
        {ID_atuacaoelenco: 52, ID_Filme: 2, ID_TipoElenco: 4, ID_Elenco: 52},
        {ID_atuacaoelenco: 53, ID_Filme: 3, ID_TipoElenco: 2, ID_Elenco: 53},
        {ID_atuacaoelenco: 54, ID_Filme: 4, ID_TipoElenco: 3, ID_Elenco: 54},
        {ID_atuacaoelenco: 55, ID_Filme: 5, ID_TipoElenco: 4, ID_Elenco: 55},
        {ID_atuacaoelenco: 56, ID_Filme: 6, ID_TipoElenco: 2, ID_Elenco: 56},
        {ID_atuacaoelenco: 57, ID_Filme: 7, ID_TipoElenco: 4, ID_Elenco: 57},
        {ID_atuacaoelenco: 58, ID_Filme: 8, ID_TipoElenco: 2, ID_Elenco: 58},
        {ID_atuacaoelenco: 59, ID_Filme: 9, ID_TipoElenco: 2, ID_Elenco: 59},
        {ID_atuacaoelenco: 60, ID_Filme: 10, ID_TipoElenco: 4, ID_Elenco: 60},
        {ID_atuacaoelenco: 61, ID_Filme: 11, ID_TipoElenco: 2, ID_Elenco: 61},
        {ID_atuacaoelenco: 62, ID_Filme: 12, ID_TipoElenco: 3, ID_Elenco: 62},
        {ID_atuacaoelenco: 63, ID_Filme: 13, ID_TipoElenco: 2, ID_Elenco: 63},
        {ID_atuacaoelenco: 64, ID_Filme: 14, ID_TipoElenco: 3, ID_Elenco: 64},
        {ID_atuacaoelenco: 65, ID_Filme: 15, ID_TipoElenco: 2, ID_Elenco: 65},
        {ID_atuacaoelenco: 66, ID_Filme: 16, ID_TipoElenco: 3, ID_Elenco: 66},
        {ID_atuacaoelenco: 67, ID_Filme: 17, ID_TipoElenco: 2, ID_Elenco: 67},
        {ID_atuacaoelenco: 68, ID_Filme: 18, ID_TipoElenco: 3, ID_Elenco: 68},
        {ID_atuacaoelenco: 69, ID_Filme: 19, ID_TipoElenco: 2, ID_Elenco: 69},
        {ID_atuacaoelenco: 70, ID_Filme: 20, ID_TipoElenco: 3, ID_Elenco: 70},
        {ID_atuacaoelenco: 71, ID_Filme: 21, ID_TipoElenco: 2, ID_Elenco: 71},
        {ID_atuacaoelenco: 72, ID_Filme: 22, ID_TipoElenco: 3, ID_Elenco: 72},
        {ID_atuacaoelenco: 73, ID_Filme: 23, ID_TipoElenco: 2, ID_Elenco: 73},
        {ID_atuacaoelenco: 74, ID_Filme: 24, ID_TipoElenco: 3, ID_Elenco: 74},
        {ID_atuacaoelenco: 75, ID_Filme: 25, ID_TipoElenco: 2, ID_Elenco: 75},
        {ID_atuacaoelenco: 76, ID_Filme: 26, ID_TipoElenco: 3, ID_Elenco: 76},
        {ID_atuacaoelenco: 77, ID_Filme: 27, ID_TipoElenco: 2, ID_Elenco: 77},
        {ID_atuacaoelenco: 78, ID_Filme: 28, ID_TipoElenco: 3, ID_Elenco: 78},
        {ID_atuacaoelenco: 79, ID_Filme: 29, ID_TipoElenco: 2, ID_Elenco: 79},
        {ID_atuacaoelenco: 80, ID_Filme: 30, ID_TipoElenco: 3, ID_Elenco: 80},
        {ID_atuacaoelenco: 81, ID_Filme: 31, ID_TipoElenco: 2, ID_Elenco: 81},
        {ID_atuacaoelenco: 82, ID_Filme: 32, ID_TipoElenco: 3, ID_Elenco: 82},
        {ID_atuacaoelenco: 83, ID_Filme: 33, ID_TipoElenco: 2, ID_Elenco: 83},
        {ID_atuacaoelenco: 84, ID_Filme: 34, ID_TipoElenco: 3, ID_Elenco: 84},
        {ID_atuacaoelenco: 85, ID_Filme: 35, ID_TipoElenco: 2, ID_Elenco: 85},
        {ID_atuacaoelenco: 86, ID_Filme: 36, ID_TipoElenco: 3, ID_Elenco: 86},
        {ID_atuacaoelenco: 87, ID_Filme: 37, ID_TipoElenco: 2, ID_Elenco: 87},
        {ID_atuacaoelenco: 88, ID_Filme: 38, ID_TipoElenco: 3, ID_Elenco: 88},
        {ID_atuacaoelenco: 89, ID_Filme: 39, ID_TipoElenco: 2, ID_Elenco: 89},
        {ID_atuacaoelenco: 90, ID_Filme: 40, ID_TipoElenco: 3, ID_Elenco: 90},
        {ID_atuacaoelenco: 91, ID_Filme: 41, ID_TipoElenco: 2, ID_Elenco: 91},
        {ID_atuacaoelenco: 92, ID_Filme: 42, ID_TipoElenco: 3, ID_Elenco: 92},
        {ID_atuacaoelenco: 93, ID_Filme: 43, ID_TipoElenco: 2, ID_Elenco: 93},
        {ID_atuacaoelenco: 94, ID_Filme: 44, ID_TipoElenco: 3, ID_Elenco: 94},
        {ID_atuacaoelenco: 95, ID_Filme: 45, ID_TipoElenco: 2, ID_Elenco: 95},
        {ID_atuacaoelenco: 96, ID_Filme: 46, ID_TipoElenco: 3, ID_Elenco: 96},
        {ID_atuacaoelenco: 97, ID_Filme: 47, ID_TipoElenco: 2, ID_Elenco: 97},
        {ID_atuacaoelenco: 98, ID_Filme: 48, ID_TipoElenco: 3, ID_Elenco: 98},
        {ID_atuacaoelenco: 99, ID_Filme: 49, ID_TipoElenco: 2, ID_Elenco: 99},
        {ID_atuacaoelenco: 100, ID_Filme: 50, ID_TipoElenco: 3, ID_Elenco: 100}
    ],
    plano_filme: [
        {ID_Plano_Filme: 1, ID_Filme: 1, ID_Plano: 3},
        {ID_Plano_Filme: 2, ID_Filme: 2, ID_Plano: 3},
        {ID_Plano_Filme: 3, ID_Filme: 3, ID_Plano: 3},
        {ID_Plano_Filme: 4, ID_Filme: 4, ID_Plano: 3},
        {ID_Plano_Filme: 5, ID_Filme: 5, ID_Plano: 3},
        {ID_Plano_Filme: 6, ID_Filme: 6, ID_Plano: 3},
        {ID_Plano_Filme: 7, ID_Filme: 7, ID_Plano: 3},
        {ID_Plano_Filme: 8, ID_Filme: 8, ID_Plano: 3},
        {ID_Plano_Filme: 9, ID_Filme: 9, ID_Plano: 3},
        {ID_Plano_Filme: 10, ID_Filme: 10, ID_Plano: 3},
        {ID_Plano_Filme: 11, ID_Filme: 11, ID_Plano: 3},
        {ID_Plano_Filme: 12, ID_Filme: 12, ID_Plano: 3},
        {ID_Plano_Filme: 13, ID_Filme: 13, ID_Plano: 3},
        {ID_Plano_Filme: 14, ID_Filme: 14, ID_Plano: 3},
        {ID_Plano_Filme: 15, ID_Filme: 15, ID_Plano: 3},
        {ID_Plano_Filme: 16, ID_Filme: 16, ID_Plano: 3},
        {ID_Plano_Filme: 17, ID_Filme: 17, ID_Plano: 3},
        {ID_Plano_Filme: 18, ID_Filme: 18, ID_Plano: 3},
        {ID_Plano_Filme: 19, ID_Filme: 19, ID_Plano: 3},
        {ID_Plano_Filme: 20, ID_Filme: 20, ID_Plano: 3},
        {ID_Plano_Filme: 21, ID_Filme: 21, ID_Plano: 3},
        {ID_Plano_Filme: 22, ID_Filme: 22, ID_Plano: 3},
        {ID_Plano_Filme: 23, ID_Filme: 23, ID_Plano: 3},
        {ID_Plano_Filme: 24, ID_Filme: 24, ID_Plano: 3},
        {ID_Plano_Filme: 25, ID_Filme: 25, ID_Plano: 3},
        {ID_Plano_Filme: 26, ID_Filme: 26, ID_Plano: 3},
        {ID_Plano_Filme: 27, ID_Filme: 27, ID_Plano: 3},
        {ID_Plano_Filme: 28, ID_Filme: 28, ID_Plano: 3},
        {ID_Plano_Filme: 29, ID_Filme: 29, ID_Plano: 3},
        {ID_Plano_Filme: 30, ID_Filme: 30, ID_Plano: 3},
        {ID_Plano_Filme: 31, ID_Filme: 31, ID_Plano: 3},
        {ID_Plano_Filme: 32, ID_Filme: 32, ID_Plano: 3},
        {ID_Plano_Filme: 33, ID_Filme: 33, ID_Plano: 3},
        {ID_Plano_Filme: 34, ID_Filme: 34, ID_Plano: 3},
        {ID_Plano_Filme: 35, ID_Filme: 35, ID_Plano: 3},
        {ID_Plano_Filme: 36, ID_Filme: 36, ID_Plano: 3},
        {ID_Plano_Filme: 37, ID_Filme: 37, ID_Plano: 3},
        {ID_Plano_Filme: 38, ID_Filme: 38, ID_Plano: 3},
        {ID_Plano_Filme: 39, ID_Filme: 39, ID_Plano: 3},
        {ID_Plano_Filme: 40, ID_Filme: 40, ID_Plano: 3},
        {ID_Plano_Filme: 41, ID_Filme: 41, ID_Plano: 3},
        {ID_Plano_Filme: 42, ID_Filme: 42, ID_Plano: 3},
        {ID_Plano_Filme: 43, ID_Filme: 43, ID_Plano: 3},
        {ID_Plano_Filme: 44, ID_Filme: 44, ID_Plano: 3},
        {ID_Plano_Filme: 45, ID_Filme: 45, ID_Plano: 3},
        {ID_Plano_Filme: 46, ID_Filme: 46, ID_Plano: 3},
        {ID_Plano_Filme: 47, ID_Filme: 47, ID_Plano: 3},
        {ID_Plano_Filme: 48, ID_Filme: 48, ID_Plano: 3},
        {ID_Plano_Filme: 49, ID_Filme: 49, ID_Plano: 3},
        {ID_Plano_Filme: 50, ID_Filme: 50, ID_Plano: 3},
        {ID_Plano_Filme: 51, ID_Filme: 1, ID_Plano: 2},
        {ID_Plano_Filme: 52, ID_Filme: 2, ID_Plano: 2},
        {ID_Plano_Filme: 53, ID_Filme: 3, ID_Plano: 2},
        {ID_Plano_Filme: 54, ID_Filme: 4, ID_Plano: 2},
        {ID_Plano_Filme: 55, ID_Filme: 5, ID_Plano: 2},
        {ID_Plano_Filme: 56, ID_Filme: 6, ID_Plano: 2},
        {ID_Plano_Filme: 57, ID_Filme: 7, ID_Plano: 2},
        {ID_Plano_Filme: 58, ID_Filme: 8, ID_Plano: 2},
        {ID_Plano_Filme: 59, ID_Filme: 9, ID_Plano: 2},
        {ID_Plano_Filme: 60, ID_Filme: 10, ID_Plano: 2},
        {ID_Plano_Filme: 61, ID_Filme: 11, ID_Plano: 2},
        {ID_Plano_Filme: 62, ID_Filme: 12, ID_Plano: 2},
        {ID_Plano_Filme: 63, ID_Filme: 13, ID_Plano: 2},
        {ID_Plano_Filme: 64, ID_Filme: 14, ID_Plano: 2},
        {ID_Plano_Filme: 65, ID_Filme: 15, ID_Plano: 2},
        {ID_Plano_Filme: 66, ID_Filme: 16, ID_Plano: 2},
        {ID_Plano_Filme: 67, ID_Filme: 17, ID_Plano: 2},
        {ID_Plano_Filme: 68, ID_Filme: 18, ID_Plano: 2},
        {ID_Plano_Filme: 69, ID_Filme: 19, ID_Plano: 2},
        {ID_Plano_Filme: 70, ID_Filme: 20, ID_Plano: 2},
        {ID_Plano_Filme: 71, ID_Filme: 21, ID_Plano: 2},
        {ID_Plano_Filme: 72, ID_Filme: 22, ID_Plano: 2},
        {ID_Plano_Filme: 73, ID_Filme: 23, ID_Plano: 2},
        {ID_Plano_Filme: 74, ID_Filme: 24, ID_Plano: 2},
        {ID_Plano_Filme: 75, ID_Filme: 25, ID_Plano: 2},
        {ID_Plano_Filme: 76, ID_Filme: 26, ID_Plano: 2},
        {ID_Plano_Filme: 77, ID_Filme: 27, ID_Plano: 2},
        {ID_Plano_Filme: 78, ID_Filme: 28, ID_Plano: 2},
        {ID_Plano_Filme: 79, ID_Filme: 29, ID_Plano: 2},
        {ID_Plano_Filme: 80, ID_Filme: 30, ID_Plano: 2},
    {ID_Plano_Filme: 81, ID_Filme: 1, ID_Plano: 1},
        {ID_Plano_Filme: 82, ID_Filme: 2, ID_Plano: 1},
        {ID_Plano_Filme: 83, ID_Filme: 3, ID_Plano: 1},
        {ID_Plano_Filme: 84, ID_Filme: 4, ID_Plano: 1},
        {ID_Plano_Filme: 85, ID_Filme: 5, ID_Plano: 1},
        {ID_Plano_Filme: 86, ID_Filme: 6, ID_Plano: 1},
        {ID_Plano_Filme: 87, ID_Filme: 7, ID_Plano: 1},
        {ID_Plano_Filme: 88, ID_Filme: 8, ID_Plano: 1},
        {ID_Plano_Filme: 89, ID_Filme: 9, ID_Plano: 1},
        {ID_Plano_Filme: 90, ID_Filme: 10, ID_Plano: 1},
        {ID_Plano_Filme: 91, ID_Filme: 11, ID_Plano: 1},
        {ID_Plano_Filme: 92, ID_Filme: 12, ID_Plano: 1},
        {ID_Plano_Filme: 93, ID_Filme: 13, ID_Plano: 1},
        {ID_Plano_Filme: 94, ID_Filme: 14, ID_Plano: 1},
        {ID_Plano_Filme: 95, ID_Filme: 15, ID_Plano: 1}
   ],
    filme_avaliado: [
        {
            ID_Avaliacao: 1,
            resenha: "Ótimo filme de ação com cenas incríveis.",
            estrelas: 5,
            data_avaliacao: "2025-06-20",
            ID_Filme: 1,
            ID_Perfil: 1
        },
        {
            ID_Avaliacao: 2,
            resenha: "Um clássico da comédia, mas um pouco previsível.",
            estrelas: 3,
            data_avaliacao: "2025-06-22",
            ID_Filme: 2,
            ID_Perfil: 2
        },
        {
            ID_Avaliacao: 3,
            resenha: "Um dos melhores filmes de ficção científica que já vi.",
            estrelas: 5,
            data_avaliacao: "2025-06-23",
            ID_Filme: 3,
            ID_Perfil: 3
        },
        {
            ID_Avaliacao: 4,
            resenha: "Uma história emocionante, que ficou gravada na memória.",
            estrelas: 4,
            data_avaliacao: "2025-06-25",
            ID_Filme: 4,
            ID_Perfil: 4
        },
        {
            ID_Avaliacao: 5,
            resenha: "Um filme encantador e emocionante.",
            estrelas: 4,
            data_avaliacao: "2025-06-26",
            ID_Filme: 5,
            ID_Perfil: 5
        },
        {
            ID_Avaliacao: 6,
            resenha: "Excelente atuação, mas a história foi previsível.",
            estrelas: 3,
            data_avaliacao: "2025-06-27",
            ID_Filme: 6,
            ID_Perfil: 6
        },
        {
            ID_Avaliacao: 7,
            resenha: "Muito bom para uma tarde divertida, mas nada espetacular.",
            estrelas: 3,
            data_avaliacao: "2025-06-28",
            ID_Filme: 7,
            ID_Perfil: 7
        },
        {
            ID_Avaliacao: 8,
            resenha: "Visual impressionante, mas o enredo deixou a desejar.",
            estrelas: 2,
            data_avaliacao: "2025-06-29",
            ID_Filme: 8,
            ID_Perfil: 8
        },
        {
            ID_Avaliacao: 9,
            resenha: "Um filme épico com excelente desenvolvimento de personagens.",
            estrelas: 5,
            data_avaliacao: "2025-07-01",
            ID_Filme: 9,
            ID_Perfil: 9
        },
        {
            ID_Avaliacao: 10,
            resenha: "Uma obra-prima visual, mas a trama poderia ter sido mais desenvolvida.",
            estrelas: 4,
            data_avaliacao: "2025-07-02",
            ID_Filme: 10,
            ID_Perfil: 10
        },
        {
            ID_Avaliacao: 11,
            resenha: "Enredo complexo, mas muito bem executado.",
            estrelas: 4,
            data_avaliacao: "2025-07-03",
            ID_Filme: 11,
            ID_Perfil: 11
        },
        {
            ID_Avaliacao: 12,
            resenha: "Filme inovador com personagens marcantes.",
            estrelas: 5,
            data_avaliacao: "2025-07-04",
            ID_Filme: 12,
            ID_Perfil: 12
        },
        {
            ID_Avaliacao: 13,
            resenha: "Atmosfera sombria que prende a atenção.",
            estrelas: 4,
            data_avaliacao: "2025-07-05",
            ID_Filme: 13,
            ID_Perfil: 13
        },
        {
            ID_Avaliacao: 14,
            resenha: "Atuações intensas, mas o ritmo é lento.",
            estrelas: 3,
            data_avaliacao: "2025-07-06",
            ID_Filme: 14,
            ID_Perfil: 14
        },
        {
            ID_Avaliacao: 15,
            resenha: "Visual impressionante e cenas emocionantes.",
            estrelas: 4,
            data_avaliacao: "2025-07-07",
            ID_Filme: 15,
            ID_Perfil: 15
        },
        {
            ID_Avaliacao: 16,
            resenha: "Perfeito para toda a família, diversão garantida.",
            estrelas: 5,
            data_avaliacao: "2025-07-08",
            ID_Filme: 16,
            ID_Perfil: 16
        },
        {
            ID_Avaliacao: 17,
            resenha: "História criativa e personagens encantadores.",
            estrelas: 5,
            data_avaliacao: "2025-07-09",
            ID_Filme: 17,
            ID_Perfil: 17
        },
        {
            ID_Avaliacao: 18,
            resenha: "Animação bonita, mas o roteiro é simples.",
            estrelas: 3,
            data_avaliacao: "2025-07-10",
            ID_Filme: 18,
            ID_Perfil: 18
        },
        {
            ID_Avaliacao: 19,
            resenha: "Trama profunda e muito bem construída.",
            estrelas: 5,
            data_avaliacao: "2025-07-11",
            ID_Filme: 19,
            ID_Perfil: 19
        },
        {
            ID_Avaliacao: 20,
            resenha: "Musical vibrante com ótimas canções.",
            estrelas: 4,
            data_avaliacao: "2025-07-12",
            ID_Filme: 20,
            ID_Perfil: 20
        },
        {
            ID_Avaliacao: 21,
            resenha: "Suspense constante e ação frenética.",
            estrelas: 5,
            data_avaliacao: "2025-07-13",
            ID_Filme: 21,
            ID_Perfil: 21
        },
        {
            ID_Avaliacao: 22,
            resenha: "Drama intenso e reflexivo.",
            estrelas: 4,
            data_avaliacao: "2025-07-14",
            ID_Filme: 22,
            ID_Perfil: 22
        },
        {
            ID_Avaliacao: 23,
            resenha: "Filme divertido com uma mensagem positiva.",
            estrelas: 4,
            data_avaliacao: "2025-07-15",
            ID_Filme: 23,
            ID_Perfil: 23
        },
        {
            ID_Avaliacao: 24,
            resenha: "Visualmente belo, mas com uma história confusa.",
            estrelas: 3,
            data_avaliacao: "2025-07-16",
            ID_Filme: 24,
            ID_Perfil: 24
        },
        {
            ID_Avaliacao: 25,
            resenha: "Performance brilhante em um roteiro ousado.",
            estrelas: 5,
            data_avaliacao: "2025-07-17",
            ID_Filme: 25,
            ID_Perfil: 25
        },
        {
            ID_Avaliacao: 26,
            resenha: "Drama moderno e muito relevante.",
            estrelas: 4,
            data_avaliacao: "2025-07-18",
            ID_Filme: 26,
            ID_Perfil: 26
        },
        {
            ID_Avaliacao: 27,
            resenha: "Violento, porém uma obra de arte.",
            estrelas: 4,
            data_avaliacao: "2025-07-19",
            ID_Filme: 27,
            ID_Perfil: 27
        },
        {
            ID_Avaliacao: 28,
            resenha: "Clássico cult com diálogos memoráveis.",
            estrelas: 5,
            data_avaliacao: "2025-07-20",
            ID_Filme: 28,
            ID_Perfil: 28
        },
        {
            ID_Avaliacao: 29,
            resenha: "Épico e emocionante, vale a pena assistir.",
            estrelas: 5,
            data_avaliacao: "2025-07-21",
            ID_Filme: 29,
            ID_Perfil: 29
        },
        {
            ID_Avaliacao: 30,
            resenha: "Sombrio e perturbador, mas muito bom.",
            estrelas: 4,
            data_avaliacao: "2025-07-22",
            ID_Filme: 30,
            ID_Perfil: 30
        },
        {
            ID_Avaliacao: 31,
            resenha: "Cientificamente interessante e emocionante.",
            estrelas: 4,
            data_avaliacao: "2025-07-23",
            ID_Filme: 31,
            ID_Perfil: 31
        },
        {
            ID_Avaliacao: 32,
            resenha: "Criativo e cheio de personalidade.",
            estrelas: 4,
            data_avaliacao: "2025-07-24",
            ID_Filme: 32,
            ID_Perfil: 32
        },
        {
            ID_Avaliacao: 33,
            resenha: "História simples, mas comovente.",
            estrelas: 3,
            data_avaliacao: "2025-07-25",
            ID_Filme: 33,
            ID_Perfil: 33
        },
        {
            ID_Avaliacao: 34,
            resenha: "Drama intenso e visual impressionante.",
            estrelas: 5,
            data_avaliacao: "2025-07-26",
            ID_Filme: 34,
            ID_Perfil: 34
        },
        {
            ID_Avaliacao: 35,
            resenha: "Surpreendente e cheio de reviravoltas.",
            estrelas: 5,
            data_avaliacao: "2025-07-27",
            ID_Filme: 35,
            ID_Perfil: 35
        },
        {
            ID_Avaliacao: 36,
            resenha: "Tenso e muito bem produzido.",
            estrelas: 4,
            data_avaliacao: "2025-07-28",
            ID_Filme: 36,
            ID_Perfil: 36
        },
        {
            ID_Avaliacao: 37,
            resenha: "Biografia emocionante e bem feita.",
            estrelas: 4,
            data_avaliacao: "2025-07-29",
            ID_Filme: 37,
            ID_Perfil: 37
        },
        {
            ID_Avaliacao: 38,
            resenha: "História real inspiradora.",
            estrelas: 4,
            data_avaliacao: "2025-07-30",
            ID_Filme: 38,
            ID_Perfil: 38
        },
        {
            ID_Avaliacao: 39,
            resenha: "Inspirador e com excelente elenco.",
            estrelas: 5,
            data_avaliacao: "2025-07-31",
            ID_Filme: 39,
            ID_Perfil: 39
        },
        {
            ID_Avaliacao: 40,
            resenha: "Drama delicado e muito bem atuado.",
            estrelas: 5,
            data_avaliacao: "2025-08-01",
            ID_Filme: 40,
            ID_Perfil: 40
        },
        {
            ID_Avaliacao: 41,
            resenha: "Comovente e divertido.",
            estrelas: 4,
            data_avaliacao: "2025-08-02",
            ID_Filme: 41,
            ID_Perfil: 41
        },
        {
            ID_Avaliacao: 42,
            resenha: "Inspiração pura, história muito boa.",
            estrelas: 4,
            data_avaliacao: "2025-08-03",
            ID_Filme: 42,
            ID_Perfil: 42
        },
        {
            ID_Avaliacao: 43,
            resenha: "Musical intenso e dramático.",
            estrelas: 4,
            data_avaliacao: "2025-08-04",
            ID_Filme: 43,
            ID_Perfil: 43
        },
        {
            ID_Avaliacao: 44,
            resenha: "Romântico e visualmente lindo.",
            estrelas: 5,
            data_avaliacao: "2025-08-05",
            ID_Filme: 44,
            ID_Perfil: 44
        },
        {
            ID_Avaliacao: 45,
            resenha: "Brutal e realista.",
            estrelas: 4,
            data_avaliacao: "2025-08-06",
            ID_Filme: 45,
            ID_Perfil: 45
        },
        {
            ID_Avaliacao: 46,
            resenha: "Investigativo e muito bem dirigido.",
            estrelas: 4,
            data_avaliacao: "2025-08-07",
            ID_Filme: 46,
            ID_Perfil: 46
        },
        {
            ID_Avaliacao: 47,
            resenha: "Retrato da era com atuações incríveis.",
            estrelas: 5,
            data_avaliacao: "2025-08-08",
            ID_Filme: 47,
            ID_Perfil: 47
        },
        {
            ID_Avaliacao: 48,
            resenha: "Intenso e visualmente impactante.",
            estrelas: 4,
            data_avaliacao: "2025-08-09",
            ID_Filme: 48,
            ID_Perfil: 48
        },
        {
            ID_Avaliacao: 49,
            resenha: "Biografia emocionante com ótimas músicas.",
            estrelas: 5,
            data_avaliacao: "2025-08-10",
            ID_Filme: 49,
            ID_Perfil: 49
        },
        {
            ID_Avaliacao: 50,
            resenha: "Energia e talento em cada cena.",
            estrelas: 4,
            data_avaliacao: "2025-08-11",
            ID_Filme: 50,
            ID_Perfil: 50
        },
        {
            ID_Avaliacao: 51,
            resenha: "Cenas de ação muito bem coreografadas.",
            estrelas: 4,
            data_avaliacao: "2025-08-12",
            ID_Filme: 1,
            ID_Perfil: 11
        },
        {
            ID_Avaliacao: 52,
            resenha: "Humor que não envelhece, divertido para todas as idades.",
            estrelas: 4,
            data_avaliacao: "2025-08-13",
            ID_Filme: 2,
            ID_Perfil: 12
        },
        {
            ID_Avaliacao: 53,
            resenha: "Trilha sonora fantástica que complementa o filme.",
            estrelas: 5,
            data_avaliacao: "2025-08-14",
            ID_Filme: 3,
            ID_Perfil: 13
        },
        {
            ID_Avaliacao: 54,
            resenha: "Personagens cativantes e roteiro envolvente.",
            estrelas: 5,
            data_avaliacao: "2025-08-15",
            ID_Filme: 4,
            ID_Perfil: 14
        },
        {
            ID_Avaliacao: 55,
            resenha: "Animação maravilhosa e mensagem positiva.",
            estrelas: 5,
            data_avaliacao: "2025-08-16",
            ID_Filme: 5,
            ID_Perfil: 15
        },
        {
            ID_Avaliacao: 56,
            resenha: "Ótima mistura de suspense e ficção científica.",
            estrelas: 4,
            data_avaliacao: "2025-08-17",
            ID_Filme: 6,
            ID_Perfil: 16
        },
        {
            ID_Avaliacao: 57,
            resenha: "Diversão garantida para os fãs da saga.",
            estrelas: 5,
            data_avaliacao: "2025-08-18",
            ID_Filme: 7,
            ID_Perfil: 17
        },
        {
            ID_Avaliacao: 58,
            resenha: "Efeitos visuais impressionantes, porém a história poderia ser mais profunda.",
            estrelas: 3,
            data_avaliacao: "2025-08-19",
            ID_Filme: 8,
            ID_Perfil: 18
        },
        {
            ID_Avaliacao: 59,
            resenha: "Aventura épica com ótimas atuações.",
            estrelas: 5,
            data_avaliacao: "2025-08-20",
            ID_Filme: 9,
            ID_Perfil: 19
        },
        {
            ID_Avaliacao: 60,
            resenha: "Personagens complexos e enredo intrigante.",
            estrelas: 4,
            data_avaliacao: "2025-08-21",
            ID_Filme: 10,
            ID_Perfil: 20
        },
        {
            ID_Avaliacao: 61,
            resenha: "Direção inspirada e roteiro inteligente.",
            estrelas: 5,
            data_avaliacao: "2025-08-22",
            ID_Filme: 11,
            ID_Perfil: 21
        },
        {
            ID_Avaliacao: 62,
            resenha: "Emocionante e visualmente lindo.",
            estrelas: 5,
            data_avaliacao: "2025-08-23",
            ID_Filme: 12,
            ID_Perfil: 22
        },
        {
            ID_Avaliacao: 63,
            resenha: "Clima tenso e atmosfera envolvente.",
            estrelas: 4,
            data_avaliacao: "2025-08-24",
            ID_Filme: 13,
            ID_Perfil: 23
        },
        {
            ID_Avaliacao: 64,
            resenha: "Performance memorável dos atores.",
            estrelas: 5,
            data_avaliacao: "2025-08-25",
            ID_Filme: 14,
            ID_Perfil: 24
        },
        {
            ID_Avaliacao: 65,
            resenha: "Beleza visual com uma história cativante.",
            estrelas: 4,
            data_avaliacao: "2025-08-26",
            ID_Filme: 15,
            ID_Perfil: 25
        },
        {
            ID_Avaliacao: 66,
            resenha: "Divertido e emocionante para todas as idades.",
            estrelas: 5,
            data_avaliacao: "2025-08-27",
            ID_Filme: 16,
            ID_Perfil: 26
        },
        {
            ID_Avaliacao: 67,
            resenha: "História encantadora e ótima trilha sonora.",
            estrelas: 5,
            data_avaliacao: "2025-08-28",
            ID_Filme: 17,
            ID_Perfil: 27
        },
        {
            ID_Avaliacao: 68,
            resenha: "Roteiro simples, mas cheio de emoção.",
            estrelas: 3,
            data_avaliacao: "2025-08-29",
            ID_Filme: 18,
            ID_Perfil: 28
        },
        {
            ID_Avaliacao: 69,
            resenha: "Drama profundo com atuações excelentes.",
            estrelas: 5,
            data_avaliacao: "2025-08-30",
            ID_Filme: 19,
            ID_Perfil: 29
        },
        {
            ID_Avaliacao: 70,
            resenha: "Musical vibrante que emociona do início ao fim.",
            estrelas: 4,
            data_avaliacao: "2025-08-31",
            ID_Filme: 20,
            ID_Perfil: 30
        },
        {
            ID_Avaliacao: 71,
            resenha: "Suspense de tirar o fôlego.",
            estrelas: 5,
            data_avaliacao: "2025-09-01",
            ID_Filme: 21,
            ID_Perfil: 31
        },
        {
            ID_Avaliacao: 72,
            resenha: "Drama intenso e emocionante.",
            estrelas: 4,
            data_avaliacao: "2025-09-02",
            ID_Filme: 22,
            ID_Perfil: 32
        },
        {
            ID_Avaliacao: 73,
            resenha: "Filme leve e divertido com ótima mensagem.",
            estrelas: 4,
            data_avaliacao: "2025-09-03",
            ID_Filme: 23,
            ID_Perfil: 33
        },
        {
            ID_Avaliacao: 74,
            resenha: "Visual impressionante, mas com roteiro confuso.",
            estrelas: 3,
            data_avaliacao: "2025-09-04",
            ID_Filme: 24,
            ID_Perfil: 34
        },
        {
            ID_Avaliacao: 75,
            resenha: "Atuação espetacular em filme ousado.",
            estrelas: 5,
            data_avaliacao: "2025-09-05",
            ID_Filme: 25,
            ID_Perfil: 35
        },
        {
            ID_Avaliacao: 76,
            resenha: "Drama contemporâneo que toca o coração.",
            estrelas: 4,
            data_avaliacao: "2025-09-06",
            ID_Filme: 26,
            ID_Perfil: 36
        },
        {
            ID_Avaliacao: 77,
            resenha: "Violento, mas uma obra-prima do cinema.",
            estrelas: 4,
            data_avaliacao: "2025-09-07",
            ID_Filme: 27,
            ID_Perfil: 37
        },
        {
            ID_Avaliacao: 78,
            resenha: "Clássico cult com diálogos inesquecíveis.",
            estrelas: 5,
            data_avaliacao: "2025-09-08",
            ID_Filme: 28,
            ID_Perfil: 38
        },
        {
            ID_Avaliacao: 79,
            resenha: "Épico emocionante, vale muito a pena.",
            estrelas: 5,
            data_avaliacao: "2025-09-09",
            ID_Filme: 29,
            ID_Perfil: 39
        },
        {
            ID_Avaliacao: 80,
            resenha: "Sombrio e perturbador, mas muito bom.",
            estrelas: 4,
            data_avaliacao: "2025-09-10",
            ID_Filme: 30,
            ID_Perfil: 40
        },
        {
            ID_Avaliacao: 81,
            resenha: "Interessante mistura de ciência e emoção.",
            estrelas: 4,
            data_avaliacao: "2025-09-11",
            ID_Filme: 31,
            ID_Perfil: 41
        },
        {
            ID_Avaliacao: 82,
            resenha: "Criativo e cheio de personalidade.",
            estrelas: 4,
            data_avaliacao: "2025-09-12",
            ID_Filme: 32,
            ID_Perfil: 42
        },
        {
            ID_Avaliacao: 83,
            resenha: "História simples, mas comovente.",
            estrelas: 3,
            data_avaliacao: "2025-09-13",
            ID_Filme: 33,
            ID_Perfil: 43
        },
        {
            ID_Avaliacao: 84,
            resenha: "Drama intenso com visuais impressionantes.",
            estrelas: 5,
            data_avaliacao: "2025-09-14",
            ID_Filme: 34,
            ID_Perfil: 44
        },
        {
            ID_Avaliacao: 85,
            resenha: "Cheio de reviravoltas e surpresas.",
            estrelas: 5,
            data_avaliacao: "2025-09-15",
            ID_Filme: 35,
            ID_Perfil: 45
        },
        {
            ID_Avaliacao: 86,
            resenha: "Tenso e bem produzido.",
            estrelas: 4,
            data_avaliacao: "2025-09-16",
            ID_Filme: 36,
            ID_Perfil: 46
        },
        {
            ID_Avaliacao: 87,
            resenha: "Biografia emocionante e inspiradora.",
            estrelas: 4,
            data_avaliacao: "2025-09-17",
            ID_Filme: 37,
            ID_Perfil: 47
        },
        {
            ID_Avaliacao: 88,
            resenha: "História real comovente.",
            estrelas: 4,
            data_avaliacao: "2025-09-18",
            ID_Filme: 38,
            ID_Perfil: 48
        },
        {
            ID_Avaliacao: 89,
            resenha: "Inspirador e com ótimo elenco.",
            estrelas: 5,
            data_avaliacao: "2025-09-19",
            ID_Filme: 39,
            ID_Perfil: 49
        },
        {
            ID_Avaliacao: 90,
            resenha: "Drama delicado e muito bem atuado.",
            estrelas: 5,
            data_avaliacao: "2025-09-20",
            ID_Filme: 40,
            ID_Perfil: 50
        },
        {
            ID_Avaliacao: 91,
            resenha: "Comovente e divertido.",
            estrelas: 4,
            data_avaliacao: "2025-09-21",
            ID_Filme: 41,
            ID_Perfil: 1
        },
        {
            ID_Avaliacao: 92,
            resenha: "Inspiração pura, história muito boa.",
            estrelas: 4,
            data_avaliacao: "2025-09-22",
            ID_Filme: 42,
            ID_Perfil: 2
        },
        {
            ID_Avaliacao: 93,
            resenha: "Musical intenso e dramático.",
            estrelas: 4,
            data_avaliacao: "2025-09-23",
            ID_Filme: 43,
            ID_Perfil: 3
        },
        {
            ID_Avaliacao: 94,
            resenha: "Romântico e visualmente lindo.",
            estrelas: 5,
            data_avaliacao: "2025-09-24",
            ID_Filme: 44,
            ID_Perfil: 4
        },
        {
            ID_Avaliacao: 95,
            resenha: "Brutal e realista.",
            estrelas: 4,
            data_avaliacao: "2025-09-25",
            ID_Filme: 45,
            ID_Perfil: 5
        },
        {
            ID_Avaliacao: 96,
            resenha: "Investigativo e muito bem dirigido.",
            estrelas: 4,
            data_avaliacao: "2025-09-26",
            ID_Filme: 46,
            ID_Perfil: 6
        },
        {
            ID_Avaliacao: 97,
            resenha: "Retrato da era com atuações incríveis.",
            estrelas: 5,
            data_avaliacao: "2025-09-27",
            ID_Filme: 47,
            ID_Perfil: 7
        },
        {
            ID_Avaliacao: 98,
            resenha: "Intenso e visualmente impactante.",
            estrelas: 4,
            data_avaliacao: "2025-09-28",
            ID_Filme: 48,
            ID_Perfil: 8
        },
        {
            ID_Avaliacao: 99,
            resenha: "Biografia emocionante com ótimas músicas.",
            estrelas: 5,
            data_avaliacao: "2025-09-29",
            ID_Filme: 49,
            ID_Perfil: 9
        },
        {
            ID_Avaliacao: 100,
            resenha: "Energia e talento em cada cena.",
            estrelas: 4,
            data_avaliacao: "2025-09-30",
            ID_Filme: 50,
            ID_Perfil: 10
        }
    ],
    filme_assistido: [
        {ID_Assistidos: 1, data_assistido: "2025-06-01", ID_Filme: 1, ID_Perfil: 1},
        {ID_Assistidos: 2, data_assistido: "2025-06-02", ID_Filme: 2, ID_Perfil: 1},
        {ID_Assistidos: 3, data_assistido: "2025-06-03", ID_Filme: 3, ID_Perfil: 1},

        {ID_Assistidos: 4, data_assistido: "2025-06-04", ID_Filme: 4, ID_Perfil: 2},
        {ID_Assistidos: 5, data_assistido: "2025-06-05", ID_Filme: 5, ID_Perfil: 2},
        {ID_Assistidos: 6, data_assistido: "2025-06-06", ID_Filme: 6, ID_Perfil: 2},

        {ID_Assistidos: 7, data_assistido: "2025-06-07", ID_Filme: 7, ID_Perfil: 3},
        {ID_Assistidos: 8, data_assistido: "2025-06-08", ID_Filme: 8, ID_Perfil: 3},
        {ID_Assistidos: 9, data_assistido: "2025-06-09", ID_Filme: 9, ID_Perfil: 3},

        {ID_Assistidos: 10, data_assistido: "2025-06-10", ID_Filme: 10, ID_Perfil: 4},
        {ID_Assistidos: 11, data_assistido: "2025-06-11", ID_Filme: 11, ID_Perfil: 4},
        {ID_Assistidos: 12, data_assistido: "2025-06-12", ID_Filme: 12, ID_Perfil: 4},

        {ID_Assistidos: 13, data_assistido: "2025-06-13", ID_Filme: 13, ID_Perfil: 5},
        {ID_Assistidos: 14, data_assistido: "2025-06-14", ID_Filme: 14, ID_Perfil: 5},
        {ID_Assistidos: 15, data_assistido: "2025-06-15", ID_Filme: 15, ID_Perfil: 5},

        {ID_Assistidos: 16, data_assistido: "2025-06-16", ID_Filme: 16, ID_Perfil: 6},
        {ID_Assistidos: 17, data_assistido: "2025-06-17", ID_Filme: 17, ID_Perfil: 6},
        {ID_Assistidos: 18, data_assistido: "2025-06-18", ID_Filme: 18, ID_Perfil: 6},

        {ID_Assistidos: 19, data_assistido: "2025-06-19", ID_Filme: 19, ID_Perfil: 7},
        {ID_Assistidos: 20, data_assistido: "2025-06-20", ID_Filme: 20, ID_Perfil: 7},
        {ID_Assistidos: 21, data_assistido: "2025-06-21", ID_Filme: 21, ID_Perfil: 7},

        {ID_Assistidos: 22, data_assistido: "2025-06-22", ID_Filme: 22, ID_Perfil: 8},
        {ID_Assistidos: 23, data_assistido: "2025-06-23", ID_Filme: 23, ID_Perfil: 8},
        {ID_Assistidos: 24, data_assistido: "2025-06-24", ID_Filme: 24, ID_Perfil: 8},

        {ID_Assistidos: 25, data_assistido: "2025-06-25", ID_Filme: 25, ID_Perfil: 9},
        {ID_Assistidos: 26, data_assistido: "2025-06-26", ID_Filme: 26, ID_Perfil: 9},
        {ID_Assistidos: 27, data_assistido: "2025-06-27", ID_Filme: 27, ID_Perfil: 9},

        {ID_Assistidos: 28, data_assistido: "2025-06-28", ID_Filme: 28, ID_Perfil: 10},
        {ID_Assistidos: 29, data_assistido: "2025-06-29", ID_Filme: 29, ID_Perfil: 10},
        {ID_Assistidos: 30, data_assistido: "2025-06-30", ID_Filme: 30, ID_Perfil: 10},

        {ID_Assistidos: 31, data_assistido: "2025-07-01", ID_Filme: 31, ID_Perfil: 11},
        {ID_Assistidos: 32, data_assistido: "2025-07-02", ID_Filme: 32, ID_Perfil: 11},
        {ID_Assistidos: 33, data_assistido: "2025-07-03", ID_Filme: 33, ID_Perfil: 11},

        {ID_Assistidos: 34, data_assistido: "2025-07-04", ID_Filme: 34, ID_Perfil: 12},
        {ID_Assistidos: 35, data_assistido: "2025-07-05", ID_Filme: 35, ID_Perfil: 12},
        {ID_Assistidos: 36, data_assistido: "2025-07-06", ID_Filme: 36, ID_Perfil: 12},

        {ID_Assistidos: 37, data_assistido: "2025-07-07", ID_Filme: 37, ID_Perfil: 13},
        {ID_Assistidos: 38, data_assistido: "2025-07-08", ID_Filme: 38, ID_Perfil: 13},
        {ID_Assistidos: 39, data_assistido: "2025-07-09", ID_Filme: 39, ID_Perfil: 13},

        {ID_Assistidos: 40, data_assistido: "2025-07-10", ID_Filme: 40, ID_Perfil: 14},
        {ID_Assistidos: 41, data_assistido: "2025-07-11", ID_Filme: 41, ID_Perfil: 14},
        {ID_Assistidos: 42, data_assistido: "2025-07-12", ID_Filme: 42, ID_Perfil: 14},

        {ID_Assistidos: 43, data_assistido: "2025-07-13", ID_Filme: 43, ID_Perfil: 15},
        {ID_Assistidos: 44, data_assistido: "2025-07-14", ID_Filme: 44, ID_Perfil: 15},
        {ID_Assistidos: 45, data_assistido: "2025-07-15", ID_Filme: 45, ID_Perfil: 15},

        {ID_Assistidos: 46, data_assistido: "2025-07-16", ID_Filme: 46, ID_Perfil: 16},
        {ID_Assistidos: 47, data_assistido: "2025-07-17", ID_Filme: 47, ID_Perfil: 16},
        {ID_Assistidos: 48, data_assistido: "2025-07-18", ID_Filme: 48, ID_Perfil: 16},

        {ID_Assistidos: 49, data_assistido: "2025-07-19", ID_Filme: 49, ID_Perfil: 17},
        {ID_Assistidos: 50, data_assistido: "2025-07-20", ID_Filme: 50, ID_Perfil: 17},
        {ID_Assistidos: 51, data_assistido: "2025-07-21", ID_Filme: 1, ID_Perfil: 17},

        {ID_Assistidos: 52, data_assistido: "2025-07-22", ID_Filme: 2, ID_Perfil: 18},
        {ID_Assistidos: 53, data_assistido: "2025-07-23", ID_Filme: 3, ID_Perfil: 18},
        {ID_Assistidos: 54, data_assistido: "2025-07-24", ID_Filme: 4, ID_Perfil: 18},

        {ID_Assistidos: 55, data_assistido: "2025-07-25", ID_Filme: 5, ID_Perfil: 19},
        {ID_Assistidos: 56, data_assistido: "2025-07-26", ID_Filme: 6, ID_Perfil: 19},
        {ID_Assistidos: 57, data_assistido: "2025-07-27", ID_Filme: 7, ID_Perfil: 19},

        {ID_Assistidos: 58, data_assistido: "2025-07-28", ID_Filme: 8, ID_Perfil: 20},
        {ID_Assistidos: 59, data_assistido: "2025-07-29", ID_Filme: 9, ID_Perfil: 20},
        {ID_Assistidos: 60, data_assistido: "2025-07-30", ID_Filme: 10, ID_Perfil: 20},

        {ID_Assistidos: 61, data_assistido: "2025-07-31", ID_Filme: 11, ID_Perfil: 21},
        {ID_Assistidos: 62, data_assistido: "2025-08-01", ID_Filme: 12, ID_Perfil: 21},
        {ID_Assistidos: 63, data_assistido: "2025-08-02", ID_Filme: 13, ID_Perfil: 21},

        {ID_Assistidos: 64, data_assistido: "2025-08-03", ID_Filme: 14, ID_Perfil: 22},
        {ID_Assistidos: 65, data_assistido: "2025-08-04", ID_Filme: 15, ID_Perfil: 22},
        {ID_Assistidos: 66, data_assistido: "2025-08-05", ID_Filme: 16, ID_Perfil: 22},

        {ID_Assistidos: 67, data_assistido: "2025-08-06", ID_Filme: 17, ID_Perfil: 23},
        {ID_Assistidos: 68, data_assistido: "2025-08-07", ID_Filme: 18, ID_Perfil: 23},
        {ID_Assistidos: 69, data_assistido: "2025-08-08", ID_Filme: 19, ID_Perfil: 23},

        {ID_Assistidos: 70, data_assistido: "2025-08-09", ID_Filme: 20, ID_Perfil: 24},
        {ID_Assistidos: 71, data_assistido: "2025-08-10", ID_Filme: 21, ID_Perfil: 24},
        {ID_Assistidos: 72, data_assistido: "2025-08-11", ID_Filme: 22, ID_Perfil: 24},

        {ID_Assistidos: 73, data_assistido: "2025-08-12", ID_Filme: 23, ID_Perfil: 25},
        {ID_Assistidos: 74, data_assistido: "2025-08-13", ID_Filme: 24, ID_Perfil: 25},
        {ID_Assistidos: 75, data_assistido: "2025-08-14", ID_Filme: 25, ID_Perfil: 25},

        {ID_Assistidos: 76, data_assistido: "2025-08-15", ID_Filme: 26, ID_Perfil: 26},
        {ID_Assistidos: 77, data_assistido: "2025-08-16", ID_Filme: 27, ID_Perfil: 26},
        {ID_Assistidos: 78, data_assistido: "2025-08-17", ID_Filme: 28, ID_Perfil: 26},

        {ID_Assistidos: 79, data_assistido: "2025-08-18", ID_Filme: 29, ID_Perfil: 27},
        {ID_Assistidos: 80, data_assistido: "2025-08-19", ID_Filme: 30, ID_Perfil: 27},
        {ID_Assistidos: 81, data_assistido: "2025-08-20", ID_Filme: 31, ID_Perfil: 27},

        {ID_Assistidos: 82, data_assistido: "2025-08-21", ID_Filme: 32, ID_Perfil: 28},
        {ID_Assistidos: 83, data_assistido: "2025-08-22", ID_Filme: 33, ID_Perfil: 28},
        {ID_Assistidos: 84, data_assistido: "2025-08-23", ID_Filme: 34, ID_Perfil: 28},

        {ID_Assistidos: 85, data_assistido: "2025-08-24", ID_Filme: 35, ID_Perfil: 29},
        {ID_Assistidos: 86, data_assistido: "2025-08-25", ID_Filme: 36, ID_Perfil: 29},
        {ID_Assistidos: 87, data_assistido: "2025-08-26", ID_Filme: 37, ID_Perfil: 29},

        {ID_Assistidos: 88, data_assistido: "2025-08-27", ID_Filme: 38, ID_Perfil: 30},
        {ID_Assistidos: 89, data_assistido: "2025-08-28", ID_Filme: 39, ID_Perfil: 30},
        {ID_Assistidos: 90, data_assistido: "2025-08-29", ID_Filme: 40, ID_Perfil: 30},

        {ID_Assistidos: 91, data_assistido: "2025-08-30", ID_Filme: 41, ID_Perfil: 31},
        {ID_Assistidos: 92, data_assistido: "2025-08-31", ID_Filme: 42, ID_Perfil: 31},
        {ID_Assistidos: 93, data_assistido: "2025-09-01", ID_Filme: 43, ID_Perfil: 31},

        {ID_Assistidos: 94, data_assistido: "2025-09-02", ID_Filme: 44, ID_Perfil: 32},
        {ID_Assistidos: 95, data_assistido: "2025-09-03", ID_Filme: 45, ID_Perfil: 32},
        {ID_Assistidos: 96, data_assistido: "2025-09-04", ID_Filme: 46, ID_Perfil: 32},

        {ID_Assistidos: 97, data_assistido: "2025-09-05", ID_Filme: 47, ID_Perfil: 33},
        {ID_Assistidos: 98, data_assistido: "2025-09-06", ID_Filme: 48, ID_Perfil: 33},
        {ID_Assistidos: 99, data_assistido: "2025-09-07", ID_Filme: 49, ID_Perfil: 33},

        {ID_Assistidos: 100, data_assistido: "2025-09-08", ID_Filme: 50, ID_Perfil: 34},
        {ID_Assistidos: 101, data_assistido: "2025-09-09", ID_Filme: 1, ID_Perfil: 34},
        {ID_Assistidos: 102, data_assistido: "2025-09-10", ID_Filme: 2, ID_Perfil: 34},

        {ID_Assistidos: 103, data_assistido: "2025-09-11", ID_Filme: 3, ID_Perfil: 35},
        {ID_Assistidos: 104, data_assistido: "2025-09-12", ID_Filme: 4, ID_Perfil: 35},
        {ID_Assistidos: 105, data_assistido: "2025-09-13", ID_Filme: 5, ID_Perfil: 35},

        {ID_Assistidos: 106, data_assistido: "2025-09-14", ID_Filme: 6, ID_Perfil: 36},
        {ID_Assistidos: 107, data_assistido: "2025-09-15", ID_Filme: 7, ID_Perfil: 36},
        {ID_Assistidos: 108, data_assistido: "2025-09-16", ID_Filme: 8, ID_Perfil: 36},

        {ID_Assistidos: 109, data_assistido: "2025-09-17", ID_Filme: 9, ID_Perfil: 37},
        {ID_Assistidos: 110, data_assistido: "2025-09-18", ID_Filme: 10, ID_Perfil: 37},
        {ID_Assistidos: 111, data_assistido: "2025-09-19", ID_Filme: 11, ID_Perfil: 37},

        {ID_Assistidos: 112, data_assistido: "2025-09-20", ID_Filme: 12, ID_Perfil: 38},
        {ID_Assistidos: 113, data_assistido: "2025-09-21", ID_Filme: 13, ID_Perfil: 38},
        {ID_Assistidos: 114, data_assistido: "2025-09-22", ID_Filme: 14, ID_Perfil: 38},

        {ID_Assistidos: 115, data_assistido: "2025-09-23", ID_Filme: 15, ID_Perfil: 39},
        {ID_Assistidos: 116, data_assistido: "2025-09-24", ID_Filme: 16, ID_Perfil: 39},
        {ID_Assistidos: 117, data_assistido: "2025-09-25", ID_Filme: 17, ID_Perfil: 39},

        {ID_Assistidos: 118, data_assistido: "2025-09-26", ID_Filme: 18, ID_Perfil: 40},
        {ID_Assistidos: 119, data_assistido: "2025-09-27", ID_Filme: 19, ID_Perfil: 40},
        {ID_Assistidos: 120, data_assistido: "2025-09-28", ID_Filme: 20, ID_Perfil: 40},

        {ID_Assistidos: 121, data_assistido: "2025-09-29", ID_Filme: 21, ID_Perfil: 41},
        {ID_Assistidos: 122, data_assistido: "2025-09-30", ID_Filme: 22, ID_Perfil: 41},
        {ID_Assistidos: 123, data_assistido: "2025-10-01", ID_Filme: 23, ID_Perfil: 41},

        {ID_Assistidos: 124, data_assistido: "2025-10-02", ID_Filme: 24, ID_Perfil: 42},
        {ID_Assistidos: 125, data_assistido: "2025-10-03", ID_Filme: 25, ID_Perfil: 42},
        {ID_Assistidos: 126, data_assistido: "2025-10-04", ID_Filme: 26, ID_Perfil: 42},

        {ID_Assistidos: 127, data_assistido: "2025-10-05", ID_Filme: 27, ID_Perfil: 43},
        {ID_Assistidos: 128, data_assistido: "2025-10-06", ID_Filme: 28, ID_Perfil: 43},
        {ID_Assistidos: 129, data_assistido: "2025-10-07", ID_Filme: 29, ID_Perfil: 43},

        {ID_Assistidos: 130, data_assistido: "2025-10-08", ID_Filme: 30, ID_Perfil: 44},
        {ID_Assistidos: 131, data_assistido: "2025-10-09", ID_Filme: 31, ID_Perfil: 44},
        {ID_Assistidos: 132, data_assistido: "2025-10-10", ID_Filme: 32, ID_Perfil: 44},

        {ID_Assistidos: 133, data_assistido: "2025-10-11", ID_Filme: 33, ID_Perfil: 45},
        {ID_Assistidos: 134, data_assistido: "2025-10-12", ID_Filme: 34, ID_Perfil: 45},
        {ID_Assistidos: 135, data_assistido: "2025-10-13", ID_Filme: 35, ID_Perfil: 45},

        {ID_Assistidos: 136, data_assistido: "2025-10-14", ID_Filme: 36, ID_Perfil: 46},
        {ID_Assistidos: 137, data_assistido: "2025-10-15", ID_Filme: 37, ID_Perfil: 46},
        {ID_Assistidos: 138, data_assistido: "2025-10-16", ID_Filme: 38, ID_Perfil: 46},

        {ID_Assistidos: 139, data_assistido: "2025-10-17", ID_Filme: 39, ID_Perfil: 47},
        {ID_Assistidos: 140, data_assistido: "2025-10-18", ID_Filme: 40, ID_Perfil: 47},
        {ID_Assistidos: 141, data_assistido: "2025-10-19", ID_Filme: 41, ID_Perfil: 47},

        {ID_Assistidos: 142, data_assistido: "2025-10-20", ID_Filme: 42, ID_Perfil: 48},
        {ID_Assistidos: 143, data_assistido: "2025-10-21", ID_Filme: 43, ID_Perfil: 48},
        {ID_Assistidos: 144, data_assistido: "2025-10-22", ID_Filme: 44, ID_Perfil: 48},

        {ID_Assistidos: 145, data_assistido: "2025-10-23", ID_Filme: 45, ID_Perfil: 49},
        {ID_Assistidos: 146, data_assistido: "2025-10-24", ID_Filme: 46, ID_Perfil: 49},
        {ID_Assistidos: 147, data_assistido: "2025-10-25", ID_Filme: 47, ID_Perfil: 49},

        {ID_Assistidos: 148, data_assistido: "2025-10-26", ID_Filme: 48, ID_Perfil: 50},
        {ID_Assistidos: 149, data_assistido: "2025-10-27", ID_Filme: 49, ID_Perfil: 50},
        {ID_Assistidos: 150, data_assistido: "2025-10-28", ID_Filme: 50, ID_Perfil: 50}
    ],
    tipo_usuario: [
        {
            ID_TipoUsuario: 1,
            descricao_usuario: "Administrador Geral",
            ID_Usuario: 1
        },
        {
            ID_TipoUsuario: 2,
            descricao_usuario: "Usuário Comum",
            ID_Usuario: 2
        },
        {
            ID_TipoUsuario: 3,
            descricao_usuario: "Usuário Comum",
            ID_Usuario: 3
        },
        {
            ID_TipoUsuario: 4,
            descricao_usuario: "Gerenciador de conteúdo",
            ID_Usuario: 4
        },
        {
            ID_TipoUsuario: 5,
            descricao_usuario: "Usuário Comum",
            ID_Usuario: 5
        },
        {
            ID_TipoUsuario: 6,
            descricao_usuario: "Usuário Comum",
            ID_Usuario: 6
        },
        {
            ID_TipoUsuario: 7,
            descricao_usuario: "Usuário Comum",
            ID_Usuario: 7
        },
        {
            ID_TipoUsuario: 8,
            descricao_usuario: "Gerenciador de conteúdo",
            ID_Usuario: 8
        },
        {
            ID_TipoUsuario: 9,
            descricao_usuario: "Usuário Comum",
            ID_Usuario: 9
        },
        {
            ID_TipoUsuario: 10,
            descricao_usuario: "Usuário Comum",
            ID_Usuario: 10
        }
    ]
}

const avatarsGatos = [
  'img/fotos_perfil/ft1.jpeg',
  'img/fotos_perfil/ft2.jpeg',
  'img/fotos_perfil/ft3.jpeg',
  'img/fotos_perfil/ft4.jpeg',
  'img/fotos_perfil/ft5.jpeg',
  'img/fotos_perfil/ft6.jpeg',
  'img/fotos_perfil/ft7.jpeg',
  'img/fotos_perfil/ft8.jpeg',
  'img/fotos_perfil/ft9.jpeg',
  'img/fotos_perfil/ft10.jpeg',
  'img/fotos_perfil/ft11.jpeg',
  'img/fotos_perfil/ft12.jpeg',
  'img/fotos_perfil/ft13.jpeg',
  'img/fotos_perfil/ft14.jpeg',
  'img/fotos_perfil/ft15.jpeg',
  'img/fotos_perfil/ft16.jpeg',
  'img/fotos_perfil/ft17.jpeg',
  'img/fotos_perfil/ft18.jpeg',
  'img/fotos_perfil/ft19.jpeg'
];


// ====================================
// FUNÇÕES CRUD COMPLETAS
// ====================================

const DB = {
    
    // ==================== GÊNEROS ====================
    genero: {
        adicionar: function(genero) {
            const novoID = bancoDeDados.genero.length + 1;
            const novoGenero = {
                ID_Genero: novoID,
                nome_genero: genero.nome_genero || "",
                descricao: genero.descricao || "",
                ...genero
            };
            bancoDeDados.genero.push(novoGenero);
            DB.salvar();
            return novoGenero;
        },

        buscar: function(id) {
            return bancoDeDados.genero.find(g => g.ID_Genero === id);
        },

        listar: function() {
            return bancoDeDados.genero;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.genero.findIndex(g => g.ID_Genero === id);
            if(index !== -1) {
                bancoDeDados.genero[index] = {...bancoDeDados.genero[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.genero[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.genero = bancoDeDados.genero.filter(g => g.ID_Genero !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== FILMES ====================
    filmes: {
        adicionar: function(filme) {
            const novoID = bancoDeDados.filmes.length + 1;
            const novoFilme = {
                ID_Filme: novoID,
                nome_filme: filme.nome_filme || "",
                classificacao: filme.classificacao || 0,
                nacionalidade: filme.nacionalidade || "",
                lancamento: filme.lancamento || "",
                orcamento: filme.orcamento || 0,
                diretor_principal: filme.diretor_principal || "",
                foto_filme: filme.foto_filme || "",
                ...filme
            };
            bancoDeDados.filmes.push(novoFilme);
            DB.salvar();
            return novoFilme;
        },

        buscar: function(id) {
            return bancoDeDados.filmes.find(f => f.ID_Filme === id);
        },

        buscarPorNome: function(nome) {
            return bancoDeDados.filmes.filter(f => 
                f.nome_filme.toLowerCase().includes(nome.toLowerCase())
            );
        },

        listar: function() {
            return bancoDeDados.filmes;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.filmes.findIndex(f => f.ID_Filme === id);
            if(index !== -1) {
                bancoDeDados.filmes[index] = {...bancoDeDados.filmes[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.filmes[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.filmes = bancoDeDados.filmes.filter(f => f.ID_Filme !== id);
            // Remove relacionamentos
            bancoDeDados.filme_genero = bancoDeDados.filme_genero.filter(fg => fg.ID_Filme !== id);
            bancoDeDados.atuacao_elenco = bancoDeDados.atuacao_elenco.filter(ae => ae.ID_Filme !== id);
            bancoDeDados.filme_avaliado = bancoDeDados.filme_avaliado.filter(fa => fa.ID_Filme !== id);
            bancoDeDados.filme_assistido = bancoDeDados.filme_assistido.filter(fa => fa.ID_Filme !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== ELENCO ====================
    elenco: {
        adicionar: function(ator) {
            const novoID = bancoDeDados.elenco.length + 1;
            const novoAtor = {
                ID_Elenco: novoID,
                nome: ator.nome || "",
                ...ator
            };
            bancoDeDados.elenco.push(novoAtor);
            DB.salvar();
            return novoAtor;
        },

        buscar: function(id) {
            return bancoDeDados.elenco.find(e => e.ID_Elenco === id);
        },

        buscarPorNome: function(nome) {
            return bancoDeDados.elenco.filter(e => 
                e.nome.toLowerCase().includes(nome.toLowerCase())
            );
        },

        listar: function() {
            return bancoDeDados.elenco;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.elenco.findIndex(e => e.ID_Elenco === id);
            if(index !== -1) {
                bancoDeDados.elenco[index] = {...bancoDeDados.elenco[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.elenco[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.elenco = bancoDeDados.elenco.filter(e => e.ID_Elenco !== id);
            bancoDeDados.atuacao_elenco = bancoDeDados.atuacao_elenco.filter(ae => ae.ID_Elenco !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== TIPO ELENCO ====================
    tipoElenco: {
        adicionar: function(tipo) {
            const novoID = bancoDeDados.tipo_elenco.length + 1;
            const novoTipo = {
                ID_TipoElenco: novoID,
                descricao_elenco: tipo.descricao_elenco || "",
                ...tipo
            };
            bancoDeDados.tipo_elenco.push(novoTipo);
            DB.salvar();
            return novoTipo;
        },

        buscar: function(id) {
            return bancoDeDados.tipo_elenco.find(t => t.ID_TipoElenco === id);
        },

        listar: function() {
            return bancoDeDados.tipo_elenco;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.tipo_elenco.findIndex(t => t.ID_TipoElenco === id);
            if(index !== -1) {
                bancoDeDados.tipo_elenco[index] = {...bancoDeDados.tipo_elenco[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.tipo_elenco[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.tipo_elenco = bancoDeDados.tipo_elenco.filter(t => t.ID_TipoElenco !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== USUÁRIOS ====================
    usuario: {
        adicionar: function(usuario) {
            const novoID = bancoDeDados.usuario.length + 1;
            const novoUsuario = {
                ID_Usuario: novoID,
                senha: usuario.senha || "",
                email: usuario.email || "",
                CPF: usuario.CPF || "",
                telefone: usuario.telefone || "",
                data_nascimento: usuario.data_nascimento || "",
                sexo: usuario.sexo || "",
                status_usuario: true,
                nome: usuario.nome || "",
                ...usuario
            };
            bancoDeDados.usuario.push(novoUsuario);
            DB.salvar();
            return novoUsuario;
        },

        buscar: function(id) {
            return bancoDeDados.usuario.find(u => u.ID_Usuario === id);
        },

        buscarPorEmail: function(email) {
            return bancoDeDados.usuario.find(u => u.email === email);
        },

        listar: function() {
            return bancoDeDados.usuario;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.usuario.findIndex(u => u.ID_Usuario === id);
            if(index !== -1) {
                bancoDeDados.usuario[index] = {...bancoDeDados.usuario[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.usuario[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.usuario = bancoDeDados.usuario.filter(u => u.ID_Usuario !== id);
            // Remove perfis associados
            bancoDeDados.perfil = bancoDeDados.perfil.filter(p => p.ID_Usuario !== id);
            bancoDeDados.assinatura_plano = bancoDeDados.assinatura_plano.filter(a => a.ID_Usuario !== id);
            DB.salvar();
            return true;
        },

        validarLogin: function(email, senha) {
            const usuario = this.buscarPorEmail(email);
            if(usuario && usuario.senha === senha) {
                return usuario;
            }
            return null;
        }
    },

    // ==================== PLANOS ====================
    plano: {
        adicionar: function(plano) {
            const novoID = bancoDeDados.plano.length + 1;
            const novoPlano = {
                ID_Plano: novoID,
                tipo_plano: plano.tipo_plano || "",
                valor: plano.valor || 0,
                ...plano
            };
            bancoDeDados.plano.push(novoPlano);
            DB.salvar();
            return novoPlano;
        },

        buscar: function(id) {
            return bancoDeDados.plano.find(p => p.ID_Plano === id);
        },

        listar: function() {
            return bancoDeDados.plano;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.plano.findIndex(p => p.ID_Plano === id);
            if(index !== -1) {
                bancoDeDados.plano[index] = {...bancoDeDados.plano[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.plano[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.plano = bancoDeDados.plano.filter(p => p.ID_Plano !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== PERFIS ====================
    perfil: {
        adicionar: function(perfil) {
            const novoID = bancoDeDados.perfil.length + 1;
            const novoPerfil = {
                ID_Perfil: novoID,
                nome_perfil: perfil.nome_perfil || "",
                classificacao_perfil: perfil.classificacao_perfil || 0,
                ID_Usuario: perfil.ID_Usuario || 0,
                foto_perfil: perfil.foto_perfil || "",
                ...perfil
            };
            bancoDeDados.perfil.push(novoPerfil);
            DB.salvar();
            return novoPerfil;
        },

        buscar: function(id) {
            return bancoDeDados.perfil.find(p => p.ID_Perfil === id);
        },

        buscarPorUsuario: function(idUsuario) {
            return bancoDeDados.perfil.filter(p => p.ID_Usuario === idUsuario);
        },

        listar: function() {
            return bancoDeDados.perfil;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.perfil.findIndex(p => p.ID_Perfil === id);
            if(index !== -1) {
                bancoDeDados.perfil[index] = {...bancoDeDados.perfil[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.perfil[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.perfil = bancoDeDados.perfil.filter(p => p.ID_Perfil !== id);
            // Remove avaliações e histórico
            bancoDeDados.filme_avaliado = bancoDeDados.filme_avaliado.filter(fa => fa.ID_Perfil !== id);
            bancoDeDados.filme_assistido = bancoDeDados.filme_assistido.filter(fa => fa.ID_Perfil !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== ASSINATURA PLANO ====================
    assinatura: {
        adicionar: function(assinatura) {
            const novoID = bancoDeDados.assinatura_plano.length + 1;
            const novaAssinatura = {
                ID_Assinatura: novoID,
                tipo_pagamento: assinatura.tipo_pagamento || "",
                data_assinatura: new Date().toISOString().split('T')[0],
                status_assinatura: true,
                ID_Plano: assinatura.ID_Plano || 0,
                ID_Usuario: assinatura.ID_Usuario || 0,
                ...assinatura
            };
            bancoDeDados.assinatura_plano.push(novaAssinatura);
            DB.salvar();
            return novaAssinatura;
        },

        buscar: function(id) {
            return bancoDeDados.assinatura_plano.find(a => a.ID_Assinatura === id);
        },

        buscarPorUsuario: function(idUsuario) {
            return bancoDeDados.assinatura_plano.filter(a => a.ID_Usuario === idUsuario);
        },

        listar: function() {
            return bancoDeDados.assinatura_plano;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.assinatura_plano.findIndex(a => a.ID_Assinatura === id);
            if(index !== -1) {
                bancoDeDados.assinatura_plano[index] = {...bancoDeDados.assinatura_plano[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.assinatura_plano[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.assinatura_plano = bancoDeDados.assinatura_plano.filter(a => a.ID_Assinatura !== id);
            DB.salvar();
            return true;
        },

        cancelar: function(id) {
            return this.atualizar(id, {status_assinatura: false});
        }
    },

    // ==================== FILME-GÊNERO (Relacionamento) ====================
    filmeGenero: {
        adicionar: function(relacao) {
            const novoID = bancoDeDados.filme_genero.length + 1;
            const novaRelacao = {
                ID_Filme_Genero: novoID,
                ID_Genero: relacao.ID_Genero || 0,
                ID_Filme: relacao.ID_Filme || 0,
                ...relacao
            };
            bancoDeDados.filme_genero.push(novaRelacao);
            DB.salvar();
            return novaRelacao;
        },

        buscarGenerosPorFilme: function(idFilme) {
            const relacoes = bancoDeDados.filme_genero.filter(fg => fg.ID_Filme === idFilme);
            return relacoes.map(r => DB.genero.buscar(r.ID_Genero));
        },

        buscarFilmesPorGenero: function(idGenero) {
            const relacoes = bancoDeDados.filme_genero.filter(fg => fg.ID_Genero === idGenero);
            return relacoes.map(r => DB.filmes.buscar(r.ID_Filme));
        },

        listar: function() {
            return bancoDeDados.filme_genero;
        },

        deletar: function(id) {
            bancoDeDados.filme_genero = bancoDeDados.filme_genero.filter(fg => fg.ID_Filme_Genero !== id);
            DB.salvar();
            return true;
        },

        deletarPorFilme: function(idFilme) {
            bancoDeDados.filme_genero = bancoDeDados.filme_genero.filter(fg => fg.ID_Filme !== idFilme);
            DB.salvar();
        }
    },

    // ==================== ATUAÇÃO ELENCO (Relacionamento) ====================
    atuacaoElenco: {
        adicionar: function(atuacao) {
            const novoID = bancoDeDados.atuacao_elenco.length + 1;
            const novaAtuacao = {
                ID_atuacaoelenco: novoID,
                ID_Filme: atuacao.ID_Filme || 0,
                ID_TipoElenco: atuacao.ID_TipoElenco || 0,
                ID_Elenco: atuacao.ID_Elenco || 0,
                ...atuacao
            };
            bancoDeDados.atuacao_elenco.push(novaAtuacao);
            DB.salvar();
            return novaAtuacao;
        },

        buscarElencoPorFilme: function(idFilme) {
            const atuacoes = bancoDeDados.atuacao_elenco.filter(ae => ae.ID_Filme === idFilme);
            return atuacoes.map(a => ({
                ...DB.elenco.buscar(a.ID_Elenco),
                tipo: DB.tipoElenco.buscar(a.ID_TipoElenco)
            }));
        },

        buscarFilmesPorAtor: function(idElenco) {
            const atuacoes = bancoDeDados.atuacao_elenco.filter(ae => ae.ID_Elenco === idElenco);
            return atuacoes.map(a => DB.filmes.buscar(a.ID_Filme));
        },

        listar: function() {
            return bancoDeDados.atuacao_elenco;
        },

        deletar: function(id) {
            bancoDeDados.atuacao_elenco = bancoDeDados.atuacao_elenco.filter(ae => ae.ID_atuacaoelenco !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== PLANO-FILME (Relacionamento) ====================
    planoFilme: {
        adicionar: function(relacao) {
            const novoID = bancoDeDados.plano_filme.length + 1;
            const novaRelacao = {
                ID_Plano_Filme: novoID,
                ID_Filme: relacao.ID_Filme || 0,
                ID_Plano: relacao.ID_Plano || 0,
                ...relacao
            };
            bancoDeDados.plano_filme.push(novaRelacao);
            DB.salvar();
            return novaRelacao;
        },

        buscarFilmesPorPlano: function(idPlano) {
            const relacoes = bancoDeDados.plano_filme.filter(pf => pf.ID_Plano === idPlano);
            return relacoes.map(r => DB.filmes.buscar(r.ID_Filme));
        },

        verificarAcesso: function(idUsuario, idFilme) {
            const assinaturas = DB.assinatura.buscarPorUsuario(idUsuario);
            const assinaturaAtiva = assinaturas.find(a => a.status_assinatura);
            if(!assinaturaAtiva) return false;

            const filmesDoPlano = this.buscarFilmesPorPlano(assinaturaAtiva.ID_Plano);
            return filmesDoPlano.some(f => f.ID_Filme === idFilme);
        },

        listar: function() {
            return bancoDeDados.plano_filme;
        },

        deletar: function(id) {
            bancoDeDados.plano_filme = bancoDeDados.plano_filme.filter(pf => pf.ID_Plano_Filme !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== AVALIAÇÕES ====================
    avaliacao: {
        adicionar: function(avaliacao) {
            const novoID = bancoDeDados.filme_avaliado.length + 1;
            const novaAvaliacao = {
                ID_Avaliacao: novoID,
                resenha: avaliacao.resenha || "",
                estrelas: avaliacao.estrelas || 0,
                data_avaliacao: new Date().toISOString().split('T')[0],
                ID_Filme: avaliacao.ID_Filme || 0,
                ID_Perfil: avaliacao.ID_Perfil || 0,
                ...avaliacao
            };
            bancoDeDados.filme_avaliado.push(novaAvaliacao);
            DB.salvar();
            return novaAvaliacao;
        },

        buscar: function(id) {
            return bancoDeDados.filme_avaliado.find(a => a.ID_Avaliacao === id);
        },

        buscarPorFilme: function(idFilme) {
            return bancoDeDados.filme_avaliado.filter(a => a.ID_Filme === idFilme);
        },

        buscarPorPerfil: function(idPerfil) {
            return bancoDeDados.filme_avaliado.filter(a => a.ID_Perfil === idPerfil);
        },

        calcularMedia: function(idFilme) {
            const avaliacoes = this.buscarPorFilme(idFilme);
            if(avaliacoes.length === 0) return 0;
            const soma = avaliacoes.reduce((acc, a) => acc + a.estrelas, 0);
            return (soma / avaliacoes.length).toFixed(1);
        },

        listar: function() {
            return bancoDeDados.filme_avaliado;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.filme_avaliado.findIndex(a => a.ID_Avaliacao === id);
            if(index !== -1) {
                bancoDeDados.filme_avaliado[index] = {...bancoDeDados.filme_avaliado[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.filme_avaliado[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.filme_avaliado = bancoDeDados.filme_avaliado.filter(a => a.ID_Avaliacao !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== FILMES ASSISTIDOS ====================
    assistido: {
        adicionar: function(assistido) {
            const novoID = bancoDeDados.filme_assistido.length + 1;
            const novoAssistido = {
                ID_Assistidos: novoID,
                data_assistido: new Date().toISOString().split('T')[0],
                ID_Filme: assistido.ID_Filme || 0,
                ID_Perfil: assistido.ID_Perfil || 0,
                ...assistido
            };
            bancoDeDados.filme_assistido.push(novoAssistido);
            DB.salvar();
            return novoAssistido;
        },

        buscar: function(id) {
            return bancoDeDados.filme_assistido.find(a => a.ID_Assistidos === id);
        },

        buscarPorPerfil: function(idPerfil) {
            return bancoDeDados.filme_assistido.filter(a => a.ID_Perfil === idPerfil);
        },

        verificarAssistido: function(idFilme, idPerfil) {
            return bancoDeDados.filme_assistido.some(a => 
                a.ID_Filme === idFilme && a.ID_Perfil === idPerfil
            );
        },

        listar: function() {
            return bancoDeDados.filme_assistido;
        },

        deletar: function(id) {
            bancoDeDados.filme_assistido = bancoDeDados.filme_assistido.filter(a => a.ID_Assistidos !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== TIPO USUÁRIO ====================
    tipoUsuario: {
        adicionar: function(tipo) {
            const novoID = bancoDeDados.tipo_usuario.length + 1;
            const novoTipo = {
                ID_TipoUsuario: novoID,
                descricao_usuario: tipo.descricao_usuario || "",
                ID_Usuario: tipo.ID_Usuario || 0,
                ...tipo
            };
            bancoDeDados.tipo_usuario.push(novoTipo);
            DB.salvar();
            return novoTipo;
        },

        buscar: function(id) {
            return bancoDeDados.tipo_usuario.find(t => t.ID_TipoUsuario === id);
        },

        buscarPorUsuario: function(idUsuario) {
            return bancoDeDados.tipo_usuario.find(t => t.ID_Usuario === idUsuario);
        },

        listar: function() {
            return bancoDeDados.tipo_usuario;
        },

        atualizar: function(id, dadosNovos) {
            const index = bancoDeDados.tipo_usuario.findIndex(t => t.ID_TipoUsuario === id);
            if(index !== -1) {
                bancoDeDados.tipo_usuario[index] = {...bancoDeDados.tipo_usuario[index], ...dadosNovos};
                DB.salvar();
                return bancoDeDados.tipo_usuario[index];
            }
            return null;
        },

        deletar: function(id) {
            bancoDeDados.tipo_usuario = bancoDeDados.tipo_usuario.filter(t => t.ID_TipoUsuario !== id);
            DB.salvar();
            return true;
        }
    },

    // ==================== PERSISTÊNCIA ====================
    salvar: function() {
        try {
            localStorage.setItem('cinematchDB', JSON.stringify(bancoDeDados));
            return true;
        } catch(e) {
            console.error("❌ Erro ao salvar dados:", e);
            return false;
        }
    },

    carregar: function() {
        try {
            const dados = localStorage.getItem('cinematchDB');
            if(dados) {
                bancoDeDados = JSON.parse(dados);
                console.log("✅ Dados carregados do localStorage");
            } else {
                console.log("📦 Banco de dados vazio inicializado");
            }
        } catch(e) {
            console.error("❌ Erro ao carregar dados:", e);
        }
    },

    // ==================== UTILITÁRIOS ====================
    verTodos: function() {
        return bancoDeDados;
    },

    exportarJSON: function() {
        const dataStr = JSON.stringify(bancoDeDados, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `cinematch_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        console.log("💾 Backup exportado!");
    },

    importarJSON: function(jsonString) {
        try {
            const dados = JSON.parse(jsonString);
            bancoDeDados = dados;
            this.salvar();
            console.log("✅ Dados importados com sucesso!");
            return true;
        } catch(e) {
            console.error("❌ Erro ao importar:", e);
            return false;
        }
    },

    estatisticas: function() {
        return {
            total_generos: bancoDeDados.genero.length,
            total_filmes: bancoDeDados.filmes.length,
            total_elenco: bancoDeDados.elenco.length,
            total_usuarios: bancoDeDados.usuario.length,
            total_perfis: bancoDeDados.perfil.length,
            total_assinaturas: bancoDeDados.assinatura_plano.length,
            total_avaliacoes: bancoDeDados.filme_avaliado.length,
            total_assistidos: bancoDeDados.filme_assistido.length
        };
    },

    ajuda: function() {
        console.log(`
🎬 CINEMATCH DATABASE - GUIA DE USO

📚 ESTRUTURAS DISPONÍVEIS:
- DB.genero          (Gêneros de filmes)
- DB.filmes          (Catálogo de filmes)
- DB.elenco          (Atores/Atrizes)
- DB.tipoElenco      (Tipos: Protagonista, Coadjuvante, etc)
- DB.usuario         (Usuários do sistema)
- DB.plano           (Planos de assinatura)
- DB.perfil          (Perfis de usuário)
- DB.assinatura      (Assinaturas ativas)
- DB.filmeGenero     (Relação Filme-Gênero)
- DB.atuacaoElenco   (Relação Filme-Elenco)
- DB.planoFilme      (Filmes disponíveis por plano)
- DB.avaliacao       (Avaliações de filmes)
- DB.assistido       (Histórico de filmes assistidos)
- DB.tipoUsuario     (Tipo de usuário: Admin, Comum, etc)

🔧 OPERAÇÕES CRUD (Create, Read, Update, Delete):
Todas as estruturas possuem:
  .adicionar(dados)   - Criar novo registro
  .buscar(id)         - Buscar por ID
  .listar()           - Listar todos
  .atualizar(id, dados) - Atualizar registro
  .deletar(id)        - Deletar registro

💡 EXEMPLOS DE USO:

// ADICIONAR USUÁRIO
DB.usuario.adicionar({
    nome: "João Silva",
    email: "joao@email.com",
    senha: "123456",
    CPF: "12345678900",
    telefone: "(11) 99999-9999",
    data_nascimento: "1990-01-01",
    sexo: "M"
});

// BUSCAR USUÁRIO
const usuario = DB.usuario.buscarPorEmail("joao@email.com");

// LOGIN
const usuarioLogado = DB.usuario.validarLogin("joao@email.com", "123456");

// ADICIONAR FILME
DB.filmes.adicionar({
    nome_filme: "Matrix",
    classificacao: 14,
    nacionalidade: "EUA",
    lancamento: "1999-03-31",
    diretor_principal: "Lana Wachowski"
});

// CRIAR PERFIL
DB.perfil.adicionar({
    nome_perfil: "Filho",
    classificacao_perfil: 12,
    ID_Usuario: 1,
    foto_perfil: "avatar1.jpg"
});

// ADICIONAR AVALIAÇÃO
DB.avaliacao.adicionar({
    resenha: "Filme incrível!",
    estrelas: 5,
    ID_Filme: 1,
    ID_Perfil: 1
});

// MARCAR FILME COMO ASSISTIDO
DB.assistido.adicionar({
    ID_Filme: 1,
    ID_Perfil: 1
});

// RELACIONAR FILME COM GÊNERO
DB.filmeGenero.adicionar({
    ID_Filme: 1,
    ID_Genero: 1
});

// BUSCAR FILMES POR GÊNERO
const filmesAcao = DB.filmeGenero.buscarFilmesPorGenero(1);

// CALCULAR MÉDIA DE AVALIAÇÕES
const media = DB.avaliacao.calcularMedia(1);

// VERIFICAR SE PERFIL ASSISTIU FILME
const assistiu = DB.assistido.verificarAssistido(1, 1);

// VERIFICAR ACESSO AO FILME PELO PLANO
const temAcesso = DB.planoFilme.verificarAcesso(1, 1);

🛠️ FUNÇÕES UTILITÁRIAS:
- DB.salvar()        - Salvar manualmente no localStorage
- DB.carregar()      - Carregar do localStorage
- DB.resetar()       - Limpar todos os dados
- DB.verTodos()      - Ver todo o banco de dados
- DB.exportarJSON()  - Exportar backup em JSON
- DB.importarJSON(json) - Importar dados de JSON
- DB.estatisticas()  - Ver estatísticas do banco
- DB.ajuda()         - Mostrar este guia

📊 ESTATÍSTICAS:
Digite: DB.estatisticas()

💾 PERSISTÊNCIA:
Os dados são salvos AUTOMATICAMENTE no localStorage
a cada operação de criar/atualizar/deletar.
        `);
        return "Guia exibido no console!";
    }
}