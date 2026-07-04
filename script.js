/* ==========================================================================
   JAVASCRIPT - QUIZ PREMIUM O MANUAL DE SALOMÃO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Quiz Data (10 Persuasive Questions) ---
    const quizData = [
        {
            title: "Qual é a sua maior dificuldade ao iniciar uma conversa com uma mulher que te interessa?",
            subtitle: "Esta resposta define o ponto de partida do seu perfil.",
            incentive: "Entender seu obstáculo inicial nos ajudará a criar a estratégia certa.",
            options: [
                { text: "Travar completamente e não saber o que falar por medo de rejeição", profileIdx: 0 },
                { text: "Mandar um 'Oi, tudo bem?' genérico e acabar sendo ignorado", profileIdx: 2 },
                { text: "Ficar pensando demais no assunto perfeito até perder a oportunidade", profileIdx: 0 },
                { text: "Puxar assunto, mas a conversa parecer uma entrevista de emprego", profileIdx: 1 }
            ]
        },
        {
            title: "Quando você envia uma mensagem nas redes sociais, qual é a resposta mais comum?",
            subtitle: "O padrão de respostas dela revela seu valor percebido imediato.",
            incentive: "Respostas frias são apenas sintomas de uma comunicação de baixo impacto.",
            options: [
                { text: "Respostas curtas de apenas uma palavra (ex: 'sim', 'legal', emojis)", profileIdx: 2 },
                { text: "Demora de horas ou dias para responder, mostrando desinteresse", profileIdx: 2 },
                { text: "Ela visualiza a mensagem e simplesmente me deixa no vácuo", profileIdx: 2 },
                { text: "A conversa flui no começo, mas logo esfria e morre sem motivo", profileIdx: 1 }
            ]
        },
        {
            title: "Com que frequência você sente que 'ficou sem assunto' no meio da conversa?",
            subtitle: "A falta de assunto é o principal fator que faz as mulheres perderem o interesse.",
            incentive: "Ficar sem assunto é uma falha de técnica conversacional, não de personalidade.",
            options: [
                { text: "Quase sempre. O silêncio fica constrangedor muito rápido", profileIdx: 0 },
                { text: "Depois de alguns minutos, quando os temas óbvios (tempo, trabalho) acabam", profileIdx: 1 },
                { text: "Raramente, mas sinto que o papo fica superficial e entediante", profileIdx: 1 },
                { text: "Só consigo conversar bem se ela tomar a iniciativa e guiar o papo", profileIdx: 3 }
            ]
        },
        {
            title: "Onde você sente que comete os maiores erros na sua comunicação?",
            subtitle: "O ambiente digital e o físico exigem dinâmicas totalmente diferentes.",
            incentive: "Identificar o canal exato de atrito acelera sua evolução.",
            options: [
                { text: "No WhatsApp/Instagram: não consigo prender a atenção dela por texto", profileIdx: 2 },
                { text: "Pessoalmente: a ansiedade me impede de ser eu mesmo e falar confiante", profileIdx: 0 },
                { text: "Em ambos: sinto que me falta autoconfiança básica para interagir", profileIdx: 0 },
                { text: "Consigo conversar, mas não sei como avançar para um convite ou flerte", profileIdx: 3 }
            ]
        },
        {
            title: "Como você costuma conduzir uma conversa quando está atraído por alguém?",
            subtitle: "Mulheres se conectam por emoção. Homens tendem a usar apenas a lógica pura.",
            incentive: "A comunicação magnética gera emoções intensas, não relatórios lógicos de fatos.",
            options: [
                { text: "Tento ser o cara 'legal e prestativo', mas sempre caio na Friendzone", profileIdx: 3 },
                { text: "Foco em assuntos lógicos (rotina, trabalho) e o papo fica chato", profileIdx: 1 },
                { text: "Fico com receio de demonstrar interesse e parecer invasivo ou inconveniente", profileIdx: 0 },
                { text: "Tento impressionar falando demais de mim, parecendo arrogante", profileIdx: 1 }
            ]
        },
        {
            title: "Se você pudesse avaliar o impacto imediato da sua presença comunicativa, qual seria?",
            subtitle: "O julgamento inicial sobre o seu valor ocorre nos primeiros 3 segundos.",
            incentive: "Você precisa se destacar imediatamente na mente dela para não ser esquecido.",
            options: [
                { text: "Baixo impacto: sou visto apenas como 'mais um' na caixa de entrada", profileIdx: 2 },
                { text: "Médio: ela responde por educação, mas sem nenhum entusiasmo real", profileIdx: 2 },
                { text: "Inconstante: pareço interessante no início, mas perco valor ao falar", profileIdx: 1 },
                { text: "Inexistente: evito puxar assunto pessoalmente para não passar vergonha", profileIdx: 0 }
            ]
        },
        {
            title: "Qual é o seu maior receio inconsciente ao tentar se aproximar de uma mulher atraente?",
            subtitle: "O medo dita o tom da sua voz e a escolha das suas palavras.",
            incentive: "O medo da rejeição desaparece quando você domina um método testado.",
            options: [
                { text: "Ser rejeitado publicamente e me sentir humilhado", profileIdx: 0 },
                { text: "Ser rotulado como inconveniente ou que estou incomodando", profileIdx: 0 },
                { text: "Descobrir que ela é 'muito superior' ou fora da minha realidade", profileIdx: 0 },
                { text: "Não ser interessante o suficiente para prender a atenção dela", profileIdx: 1 }
            ]
        },
        {
            title: "Quem geralmente domina e dita o ritmo das conversas que você inicia?",
            subtitle: "A liderança sutil da conversa determina o nível de respeito e atração gerados.",
            incentive: "Saber liderar um diálogo com leveza é uma das maiores marcas de masculinidade.",
            options: [
                { text: "Ela domina: eu fico apenas respondendo e tentando agradar", profileIdx: 3 },
                { text: "Fica um silêncio desconfortável onde nenhum dos dois sabe o que falar", profileIdx: 0 },
                { text: "Eu tento forçar o controle, mas sinto que ela se afasta por pressão", profileIdx: 1 },
                { text: "Deixamos fluir no piloto automático, o que costuma fazer o papo morrer", profileIdx: 2 }
            ]
        },
        {
            title: "Quantas vezes você já ouviu a frase 'Eu te vejo apenas como um amigo'?",
            subtitle: "A ausência de tensão sexual na conversa cria a barreira intransponível da amizade.",
            incentive: "A comunicação certa ativa os gatilhos de atração antes do bloqueio da amizade.",
            options: [
                { text: "Frequentemente: sempre acabo virando o conselheiro amoroso dela", profileIdx: 3 },
                { text: "Algumas vezes: é frustrante porque me esforço muito para agradar", profileIdx: 3 },
                { text: "Poucas vezes, pois prefiro sumir antes de ser rejeitado dessa forma", profileIdx: 0 },
                { text: "Nunca cheguei a demonstrar interesse real para evitar a resposta", profileIdx: 0 }
            ]
        },
        {
            title: "O quanto você está decidido a dominar a arte da conversa e nunca mais ser ignorado?",
            subtitle: "A habilidade de se comunicar com alto valor define seu futuro social e amoroso.",
            incentive: "O compromisso com o seu desenvolvimento pessoal é o maior sinal de autoridade.",
            options: [
                { text: "Totalmente decidido: quero resolver isso de forma definitiva ainda hoje", profileIdx: 0 },
                { text: "Decidido, contanto que seja um passo a passo simples e prático de aplicar", profileIdx: 1 },
                { text: "Quero testar e ver se um método realmente funciona para o meu caso", profileIdx: 2 },
                { text: "Gostaria de mudar, mas tenho receio de tentar algo diferente", profileIdx: 3 }
            ]
        }
    ];

    // --- Profiles Data ---
    const profiles = [
        {
            name: "O Bloqueado pela Ansiedade",
            error: "Travar mentalmente e hesitar demais por medo inconsciente de receber uma rejeição.",
            why: "Você coloca a aprovação feminina em um pedestal. Isso faz com que sua mente encare qualquer aproximação como uma situação de alto risco, gerando ansiedade física e mental que te paralisa nos momentos cruciais.",
            how: "Você precisa blindar sua mente com uma mentalidade de desapego e dominar técnicas de quebra de gelo automáticas que reduzem a pressão inicial nos primeiros 3 segundos da conversa.",
            benefits: [
                "Técnica de 3 segundos para quebrar a ansiedade e falar com confiança.",
                "Modelos de aproximação que eliminam a sensação de estar invadindo.",
                "Exercício prático para construir uma postura corporal de alta autoridade.",
                "Como encarar a rejeição de forma fria e transformá-la em aprendizado."
            ]
        },
        {
            name: "O Entrevistador Inofensivo",
            error: "Conduzir conversas excessivamente lógicas, frias e previsíveis (estilo entrevista de emprego).",
            why: "Por medo de errar ou ousar, você foca apenas em perguntas seguras (como rotina, trabalho, estudos). Embora seja educado, esse padrão gera tédio e remove qualquer sinal de atração física ou tensão sexual.",
            how: "É necessário dominar a arte de criar ganchos emocionais nas respostas dela, provocando reações divertidas e sabendo transicionar o papo lógico para o flerte sutil e assertivo.",
            benefits: [
                "O método do 'Gancho de Salomão' para criar assunto infinito das respostas dela.",
                "Como sair de assuntos tediosos e criar conversas divertidas e profundas.",
                "Exemplos práticos de ganchos emocionais de alta atratividade.",
                "Técnica para flertar de forma elegante sem parecer desesperado."
            ]
        },
        {
            name: "O Fantasma Digital (Invisível)",
            error: "Ser constantemente ignorado, deixado no vácuo ou receber apenas respostas monossilábicas.",
            why: "Suas mensagens se parecem com as de todos os outros homens na caixa de entrada dela. Sem gerar curiosidade imediata nas primeiras palavras, você é categorizado como desinteressante antes mesmo de ser lido.",
            how: "Você deve aplicar ganchos de abertura focados em observações únicas e gatilhos mentais de curiosidade imediata, forçando uma resposta espontânea e empolgada.",
            benefits: [
                "Ganchos exatos para reviver conversas frias que morreram no histórico.",
                "Como se destacar de dezenas de mensagens na caixa de entrada do Instagram.",
                "O gatilho da curiosidade imediata: faça ela sentir urgência em te responder.",
                "Como calibrar suas fotos e perfil digital para gerar alto valor visual."
            ]
        },
        {
            name: "O Conselheiro da Friendzone",
            error: "Ser visto apenas como um 'bom amigo', confidente ou conselheiro sentimental.",
            why: "Você conversa com ela de forma puramente amigável por muito tempo, sem inserir tensão verbal ou flerte. Ao agradar demais e concordar com tudo, você perde a postura de atração e cai na zona de amizade.",
            how: "Aprenda a aplicar a 'tensão polarizada', alternando momentos de brincadeira e flerte direto, assumindo a liderança da conversa e deixando claras as suas intenções masculinas de forma polida.",
            benefits: [
                "Como reverter a Friendzone ativa e mudar o valor que ela enxerga em você.",
                "Técnicas de tensão verbal para testar o interesse dela sem ser invasivo.",
                "O segredo para fazer elogios inteligentes que geram atração, não bajulação.",
                "Como guiar o papo rumo ao convite para um encontro sem hesitação."
            ]
        }
    ];

    // --- State Variables ---
    let currentQuestionIdx = 0;
    let scores = [0, 0, 0, 0]; // Tracks counts for profiles 0, 1, 2, 3
    let confettiInterval;

    // --- DOM Elements ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const progressContainer = document.getElementById('progress-container');
    const progressStepText = document.getElementById('progress-step-text');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressFill = document.getElementById('progress-fill');
    
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    const questionCard = document.getElementById('question-card');
    
    const loaderPercentage = document.getElementById('loader-percentage');
    const loadingBarFill = document.getElementById('loading-bar-fill');
    
    const profileTitle = document.getElementById('profile-title');
    const diagBiggestError = document.getElementById('diagnostic-biggest-error');
    const diagWhyHappens = document.getElementById('diagnostic-why-happens');
    const diagHowToSolve = document.getElementById('diagnostic-how-to-solve');
    const benefitsList = document.getElementById('benefits-list');

    // --- Welcome Screen Mockup Micro-animation ---
    // Simulates an interactive typing effect on the landing screen mockup chat
    setTimeout(() => {
        const typingBubble = welcomeScreen.querySelector('.mock-chat-bubble.sent');
        if (typingBubble) {
            typingBubble.innerHTML = "Na verdade, achei seu perfil interessante por um detalhe... 😉";
        }
    }, 2000);

    // --- Event Listeners ---
    btnStartQuiz.addEventListener('click', startQuiz);

    // --- Functions ---

    function startQuiz() {
        // Smooth transition out welcome screen
        welcomeScreen.classList.remove('active');
        
        // Show progress bar
        progressContainer.style.display = 'flex';
        
        // Active quiz screen
        quizScreen.classList.add('active');
        
        // Render first question
        renderQuestion();
    }

    function renderQuestion() {
        if (currentQuestionIdx >= quizData.length) {
            // End of quiz, transition to loading screen
            startLoading();
            return;
        }

        const data = quizData[currentQuestionIdx];
        
        // Update Progress Bar
        const percentage = Math.round(((currentQuestionIdx + 1) / quizData.length) * 100);
        progressStepText.textContent = `Pergunta ${currentQuestionIdx + 1} de ${quizData.length}`;
        progressPercentage.textContent = `${percentage}%`;
        progressFill.style.width = `${percentage}%`;

        // Render question card contents
        questionCard.innerHTML = `
            <div class="question-header">
                <span class="question-subtitle">${data.subtitle}</span>
                <h2 class="question-title">${data.title}</h2>
            </div>
            
            <div class="incentive-bar">
                <i class="fa-solid fa-lightbulb" style="color: var(--primary);"></i>
                <span>${data.incentive}</span>
            </div>
            
            <div class="options-list">
                ${data.options.map((opt, idx) => `
                    <div class="option-item option-entrance-${idx}" data-profile-idx="${opt.profileIdx}" data-index="${idx}">
                        <div class="option-content">
                            <span class="option-badge">${String.fromCharCode(65 + idx)}</span>
                            <span class="option-text">${opt.text}</span>
                        </div>
                        <div class="option-indicator">
                            <div class="option-indicator-inner"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add Click handlers to new options
        const optionItems = questionCard.querySelectorAll('.option-item');
        optionItems.forEach(item => {
            item.addEventListener('click', handleOptionClick);
        });
    }

    function handleOptionClick(e) {
        const selectedOption = e.currentTarget;
        
        // Prevent double-clicking
        const allOptions = questionCard.querySelectorAll('.option-item');
        allOptions.forEach(opt => opt.style.pointerEvents = 'none');

        // Visual feedback - Select state
        selectedOption.classList.add('selected');

        // Ripple / Click expansion wave effect
        createRippleEffect(e, selectedOption);

        // Record score based on mapping
        const profileIdx = parseInt(selectedOption.getAttribute('data-profile-idx'));
        scores[profileIdx]++;

        // Auto-advance delay for fluid experience
        setTimeout(() => {
            currentQuestionIdx++;
            renderQuestion();
        }, 550);
    }

    function createRippleEffect(event, element) {
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;

        const rect = element.getBoundingClientRect();
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-wave');

        element.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 500);
    }

    function startLoading() {
        // Hide progress container
        progressContainer.style.display = 'none';
        
        // Switch screens
        quizScreen.classList.remove('active');
        loadingScreen.classList.add('active');

        // Simulating the loading phases & tick percentage
        let progress = 0;
        let activeStepIdx = 0;
        
        const steps = loadingScreen.querySelectorAll('.step-item');
        steps[0].classList.add('active');

        const interval = setInterval(() => {
            progress += 1;
            
            // Update percentage and loading bar
            loaderPercentage.textContent = `${progress}%`;
            loadingBarFill.style.width = `${progress}%`;

            // Step changes relative to percentage
            if (progress === 15) {
                markStepCompleted(0);
                activeStepIdx = 1;
                steps[1].classList.add('active');
            } else if (progress === 35) {
                markStepCompleted(1);
                activeStepIdx = 2;
                steps[2].classList.add('active');
            } else if (progress === 55) {
                markStepCompleted(2);
                activeStepIdx = 3;
                steps[3].classList.add('active');
            } else if (progress === 75) {
                markStepCompleted(3);
                activeStepIdx = 4;
                steps[4].classList.add('active');
            } else if (progress === 90) {
                markStepCompleted(4);
                activeStepIdx = 5;
                steps[5].classList.add('active');
            }

            if (progress >= 100) {
                clearInterval(interval);
                markStepCompleted(5);
                
                // Delay showing results for premium feeling
                setTimeout(() => {
                    showResults();
                }, 800);
            }
        }, 45); // Takes about 4.5 seconds to build excitement
    }

    function markStepCompleted(index) {
        const steps = loadingScreen.querySelectorAll('.step-item');
        steps[index].classList.remove('active');
        steps[index].classList.add('completed');
        
        const icon = steps[index].querySelector('.step-icon');
        if (icon) {
            icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
        }
    }

    function showResults() {
        // Switch screens
        loadingScreen.classList.remove('active');
        resultScreen.classList.add('active');

        // Compute chosen profile (the one with highest answers count)
        let maxVal = -1;
        let computedProfileIdx = 0;
        
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > maxVal) {
                maxVal = scores[i];
                computedProfileIdx = i;
            }
        }

        const profile = profiles[computedProfileIdx];

        // Populate Result Elements
        profileTitle.innerHTML = `Perfil: <span>${profile.name}</span>`;
        diagBiggestError.textContent = profile.error;
        diagWhyHappens.textContent = profile.why;
        diagHowToSolve.textContent = profile.how;

        // Custom CTA details based on profile (dynamic CRO)
        benefitsList.innerHTML = profile.benefits.map(b => `
            <div class="benefit-item">
                <span class="benefit-icon"><i class="fa-solid fa-circle-check"></i></span>
                <span>${b}</span>
            </div>
        `).join('');

        // Smooth scroll to top of card for premium viewing
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Trigger discrete, premium red/dark confetti celebration
        startConfetti();
    }

    // --- Premium Confetti Script (Canvas) ---
    function startConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        canvas.style.display = 'block';
        const ctx = canvas.getContext('2d');
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const colors = [
            '#FF1E1E', // Intense Red
            '#D40000', // Crimson Red
            '#FF3B3B', // Light Red
            '#FFFFFF', // White highlights
            '#111111'  // Dark elements
        ];

        const particleCount = 85;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height - height,
                r: Math.random() * 6 + 4,
                d: Math.random() * particleCount,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.random() * 10 - 5,
                tiltAngleIncremental: Math.random() * 0.07 + 0.02,
                tiltAngle: 0
            });
        }

        let animationFrameId;

        function draw() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, index) => {
                p.tiltAngle += p.tiltAngleIncremental;
                p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
                p.x += Math.sin(p.tiltAngle);
                p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

                ctx.beginPath();
                ctx.lineWidth = p.r;
                ctx.strokeStyle = p.color;
                ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
                ctx.stroke();
            });

            updateParticles();
            animationFrameId = requestAnimationFrame(draw);
        }

        function updateParticles() {
            for (let i = 0; i < particleCount; i++) {
                let p = particles[i];
                if (p.y > height) {
                    particles[i] = {
                        x: Math.random() * width,
                        y: -20,
                        r: p.r,
                        d: p.d,
                        color: p.color,
                        tilt: p.tilt,
                        tiltAngleIncremental: p.tiltAngleIncremental,
                        tiltAngle: p.tiltAngle
                    };
                }
            }
        }

        draw();

        // Stop confetti after 6 seconds to keep it discrete and clean
        setTimeout(() => {
            cancelAnimationFrame(animationFrameId);
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = 'none';
        }, 6000);
    }
});
