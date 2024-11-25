const poems = [
  // Viva forever
{
  english: "Do you still remember how we used to be?<br>Feeling together, believing whatever<br>My love has said to me<br>Both of us were dreamers<br><br>Young love in the sun<br>Felt like my savior, my spirit I gave you<br>We'd only just begun<br>Hasta mañana, always be mine",
  russian: "Ты всё ещё помнишь, какими мы были раньше??<br>Чувствовали друг друга, верили во все,<br>Что мне говорила моя любовь<br>Мы оба были мечтателями<br><br>Юная любовь на солнце<br>Чувствовала себя моим спасителем,<br>Свой дух я отдала тебе<br>Мы только начали<br>Hasta mañana, всегда будь моим",
  audio: "1.1.mp3"
},      
{
  english: "Viva forever, I'll be waiting<br>Everlasting, like the sun<br>Live forever, for the moment<br>Ever searching for the one",
  russian: "Viva forever, я буду ждать<br>Вечно, как солнце<br>Жить вечно, ради момента<br>Вечно искать ту единственную",
  audio: "1.2.mp3"
},
{
  english: "Yes, I still remember<br>Every whispered word<br>The touch of your skin,<br>Giving life from within<br>Like a love song never heard<br><br>Slippin' through our fingers,<br>Like the sands of time<br>Promises made,<br>Every memory saved<br>As reflections in my mind",
  russian: "Да, я всё ещё помню<br>Каждое произнесённое слово.<br>Твои прикосновения<br>Оживляли меня изнутри,<br>Как песня о любви, которую я слышала.<br><br>Ускользая сквозь наши пальцы,<br>Как пески времен<br>Обещания сделаны<br>Каждое воспоминание сохранено<br>Как отражения в моем уме.",
  audio: "1.3.mp3"
},      
{
  english: "Back where I belong now, was it just a dream?<br>Feelings unfold, they will never be sold<br>And the secret's safe with me<br>Hasta mañana, always be mine",
  russian: "Возвращаюсь туда, где я сейчас, это был всего лишь сон?<br>Чувства раскрываются, их уже не продашь<br>И секрет в безопасности со мной<br>Hasta mañana, всегда будь моим",
  audio: "1.4.mp3"
},

 // Frozen
 {
  english: "You only see what your eyes want to see<br>How can life be what you want it to be<br>You're frozen when your heart's not open<br><br>You're so consumed with how much you get<br>You waste your time with hate and regret<br>You're broken when your heart's not open",
  russian: "Ты видишь только то, что хотят видеть твои глаза<br>Как жизнь может быть такой, какой ты хочешь её видеть?<br>Ты замерзаешь, когда твоё сердце закрыто.<br><br>Ты так поглощён тем, сколько ты получаешь,<br>Ты тратишь своё время на ненависть и сожаления.<br>Ты сломлен, когда твоё сердце закрыто.",
  audio: "2.1.mp3"
},
{
  english: "If I could melt your heart<br>We'd never be apart<br>Give yourself to me<br>You hold the key",
  russian: "Если бы я мог растопить твое сердце<br>Мы бы никогда не расстались<br>Отдай себя мне<br>Ты держишь ключ",
  audio: "2.2.mp3"
},      
{
  english: "Now there's no point in placing the blame<br>And you should know I suffer the same<br>If I lose you My heart will be broken<br><br>Love is a bird, she needs to fly<br>Let all the hurt inside of you die<br>You're frozen When your heart's not open",
  russian: "Теперь нет смысла обвинять кого-то<br>И ты должен знать, что я страдаю так же<br>Если я потеряю тебя, Мое сердце будет разбито<br><br>Любовь — это птица, ей нужно летать<br>Пусть вся боль внутри тебя умрет<br>Ты замерзаешь, Когда твое сердце не открыто",
  audio: "2.3.mp3"
},
    // The Unforgiven

    {
  english: "New blood joins this earth<br>And quickly he’s subdued<br>Through constant pained disgrace<br>The young boy learns their rules<br><br>With time, the child draws in<br>This whipping boy done wrong<br>Deprived of all his thoughts<br>The young man struggles on and on, he’s known<br>A vow unto his own<br>That never from this day<br>His will they’ll take away",
  russian: "Новая кровь вливается в эту землю<br>И он быстро подчиняется<br>С помощью постоянного мучительного позора<br>Юный мальчик узнает их правила<br><br>Со временем ребенок втягивается<br>Этот мальчик для битья поступил неправильно<br>Лишенный всех своих мыслей<br>Юный человек борется снова и снова, он знает<br>Клятву себе<br>Что никогда с этого дня<br>Они не отнимут его волю",
  audio: "3.1.mp3"
},

{
  english: "What I’ve felt what I’ve known<br>Never shined through in what I’ve shown<br>Never be never see<br>Won’t see what might have been<br><br>What I’ve felt what I’ve known<br>Never shined through in what I’ve shown<br>Never free Never me<br>So I dub thee Unforgiven",
  russian: "Всё, что я чувствовал, Всё, что я знал,<br>Я никогда не показывал,<br>Никогда, Ни за что,<br>Не увидеть того, что могло бы случиться.<br><br>Всё, что я чувствовал, Всё, что я знал,<br>Я никогда не показывал,<br>Несвободный, Сам не свой,<br>Я нарекаю тебя непрощённым.",
  audio: "3.2.mp3"
},
{
  english: "They dedicate their lives<br>To running all of his<br>He tries to please them all<br>This bitter man he is<br><br>Throughout his life the same<br>He's battled constantly<br>This fight he cannot win<br>A tired man they see no longer cares<br><br>The old man then prepares<br>To die regretfully<br>That old man here is me",
  russian: "Они посвящают свою жизнь<br>Управлению всеми его<br>Он пытается угодить им всем,<br>,Этот горький человек - он сам<br><br>На протяжении всей своей жизни<br>Он постоянно сражался<br>Этот бой он не может выиграть,<br>Усталый человек, которого они видят, больше не заботится<br><br>Затем старик готовится<br>Умереть с сожалением<br>Этот старик - это я, да",
  audio: "3.3.mp3"
},
    // The kill
{
 english: "What if I wanted to break<br>Laugh it all off in your face?<br>What would you do?<br><br>What if I fell to the floor<br>Couldn't take this anymore?<br>What would you do, do, do?<br><br>Come, break me down<br>Bury me, bury me<br>I am finished with you",
  russian: "Что, если бы я хотел сломаться<br>Рассмеяться над всем этим тебе в лицо?<br>Что бы ты сделал?<br><br>Что, если бы я упал на пол<br>Не мог больше терпеть все это<br>Что бы ы сделали, сделали, сделали?<br><br>Давай! Сбей меня с ног<br>Похорони меня, похорони меня<br>я закончил с тобой",
  audio: "4.1.mp3" 
},
{
  english: "What if I wanted to fight<br>Beg for the rest of my life?<br>What would you do? <br>You say you wanted more<br>What are you waiting for?<br>I'm not running from you<br><br>Come, break me down<br>Bury me, bury me<br>I am finished with you<br>Look in my eyes<br>You're killing me, killing me<br>All I wanted was you",
  russian: "Что, если бы я хотел бороться<br>Умолять всю оставшуюся жизнь?<br>Что бы ты сделал?<br>Ты говоришь, что хочешь большего<br>Чего ты ждешь?<br>Я не убегаю от тебя<br><br>Приди, сломай меня<br>Похорони меня, похорони меня<br>Я покончил с тобой<br>Посмотри мне в глаза<br>Ты убиваешь меня, убиваешь меня<br>Все, чего я хотел, это ты",
  audio: "4.2.mp3"
},
    // Lose yourself
{
  english: "His palms are sweaty, knees weak, arms are heavy<br>There's vomit on his sweater already, mom's spaghetti<br>He's nervous, but on the surface he looks calm and ready<br>To drop bombs, but he keeps on forgettin'<br>What he wrote down, the whole crowd goes so loud<br>He opens his mouth, but the words won't come out<br>He's chokin' how everybody's jokin' now<br>The clock's run out, time's up, over, blaow",
  russian: "Его ладони вспотели, колени ослабли, руки тяжелые<br>На его свитере уже рвота, мамины спагетти<br>Он нервничает, но на первый взгляд он выглядит спокойным и готовым<br>Сбрасывать бомбы, но он продолжает забывать<br>Что он записал, вся толпа так громко кричит<br>Он открывает рот, но слова не выходят<br>Он задыхается от того, как все шутят теперь<br>Часы вышли, время вышло, конец, блау",
  audio: "5.1.mp3"
},
{
  english: "Snap back to reality, ope, there goes gravity, ope<br>There goes Rabbit, he choked, he's so mad, but he won't<br>Give up that easy, no, he won't have it<br>He knows his whole back's to these ropes, it don't matter, he's dope<br>He knows that, but he's broke, he's so stagnant, he knows<br>When he goes back to this mobile home, that's when it's<br>Back to the lab again, yo, this old rhapsody<br>Better go capture this moment and hope it don't pass him and",
  russian: "Вернемся к реальности, оп, вот и гравитация, оп<br>Вот и Кролик, он подавился, он так зол, но он не<br>Сдастся так просто, нет, он этого не допустит<br>Он знает, что его спина прикована к этим канатам, это неважно, он крут<br>Он знает это, но он разорен, он такой застой, он знает<br>Когда он вернется в этот передвижной дом, вот тогда это<br>Снова в лабораторию, йоу, эта старая рапсодия<br>Лучше пойти и запечатлеть этот момент и надеяться, что он не пройдет мимо него и",
  audio: "5.2.mp3"
},
{
  english: "You better lose yourself in the music<br>The moment, you own it, you better never let it go<br>You only get one shot, do not miss your chance to blow<br>This opportunity comes once in a lifetime, yo",
  russian: "Тебе лучше потерять себя в музыке<br>Момент, которым ты владеешь, тебе лучше никогда его не упускать<br>У тебя есть только один шанс, не упусти свой шанс взорваться<br>Такая возможность выпадает раз в жизни, йоу",
  audio: "5.3.mp3"
},
    // Bring me to life
{
  english: "How can you see into my eyes<br>Like open doors?<br>Leading you down into my core<br>Where I've become so numb<br>Without a soul (soul)<br>My spirit's sleeping somewhere cold<br>Until you find it there and lead it back home",
  russian: "Как ты можешь смотреть в мои глаза,<br>Как в открытые двери?<br>Ведущих тебя в мою суть,<br>Где я так оцепенел,<br>Без души (души),<br>Мой дух спит где-то холодном,<br>Пока ты не найдешь его там и не приведешь обратно домой.",
  audio: "6.1.mp3"
},
{
  english: "(Wake me up) Wake me up inside<br>(I can't wake up) wake me up inside<br>(Save me) call my name and save me from the dark<br>(Wake me up) bid my blood to run<br>(I can't wake up) before I come undone<br>(Save me) save me from the nothing I've become",
  russian: "Разбуди меня изнутри<br>(Я не могу проснуться) Разбуди меня изнутри<br>(Спаси меня) Назови моё имя и спаси меня от тьмы<br>(Разбуди меня) Заставь мою кровь бежать<br>(Я не могу проснуться) прежде, чем я погибну<br>(Спаси меня) Спаси меня от того ничтожества, которым я стал",
  audio: "6.2.mp3"
},
{
  english: "Now that I know what I'm without<br>You can't just leave me<br>Breathe into me and make me real<br>Bring me to life",
  russian: "Теперь, когда я знаю, чего мне не хватает,<br>Ты не можешь просто так оставить меня,<br>Вдохни в меня и сделай меня настоящим,<br>Верни меня к жизни.",
  audio: "6.3.mp3"
},
{
  english: "All this time, I can't believe I couldn't see<br>Kept in the dark, but you were there in front of me<br>I've been sleeping a thousand years, it seems<br>Got to open my eyes to everything<br><br>Without a thought, without a voice, without a soul<br>Don't let me die here<br>There must be something more<br>Bring me to life ",
  russian: "Все это время я не могу поверить, что я не мог видеть<br>Держусь в темноте, но ты был там, передо мной<br>Кажется, я спал тысячу лет<br>Должен открыть глаза на все<br><br>Без мысли, без голоса, без души<br>Не дай мне умереть здесь<br>Должно быть что-то большее<br>Верни меня к жизни",
  audio: "6.4.mp3"
},
          // Separate ways
{
  english: "Here we stand<br>Worlds apart, hearts broken in two, two, two<br>Sleepless nights, losing ground<br>I'm reachin' for you, you, you<br><br>Feelin' that it's gone<br>Can change your mind<br>If we can't go on<br>To survive the tide, love divides",
  russian: "Вот мы и стоим<br>Разделенные миры, сердца разбиты надвое, надвое, надвое<br>Бессонные ночи, теряем почву под ногами<br>Я тянусь к тебе, к тебе, к тебе<br><br>Чувствую, что всё кончено<br>Можете передумать<br>Если мы не сможем идти дальше<br>Чтобы пережить прилив, любовь разделяет",
  audio: "7.1.mp3"
},
{
  english: "Someday love will find you<br>Break those chains that bind you<br>One night will remind you<br>How we touched and went our separate ways<br><br>If he ever hurts you<br>True love won't desert you<br>You know I still love you<br>Though we touched and went our separate ways",
  russian: "Однажды любовь найдет тебя<br>Разорвет цепи, что связывают тебя<br>Однажды ночь напомнит тебе<br>Как мы соприкоснулись и разошлись<br><br>Если он когда-нибудь причинит тебе боль<br>Настоящая любовь не покинет тебя<br>Ты знаешь, я все еще люблю тебя<br>Хотя мы соприкоснулись и разошлись",
  audio: "7.2.mp3"
},
{
  english: "Troubled times<br>Caught between confusion and pain, pain, pain<br>Distant eyes<br>Promises we made were in vain, in vain, in vain<br><br>If you must go, I wish you love<br>You'll never walk alone<br>Take care, my love<br>Miss you, love",
  russian: "Смутные времена<br>Застрял между смятением и болью, болью, болью<br>Отдалённые глаза<br>Наши обещания были напрасны, напрасны, напрасны<br><br>Если ты должен уйти, я желаю тебе любви<br>Ты никогда не будешь идти один<br>Береги себя, моя любовь<br>Скучаю по тебе, любовь",
  audio: "7.3.mp3"
},
                // In the dark Purple
{
  english: "I got lost in the wilderness<br>I thought I was surely falling apart<br>The pain you caused cut so deep<br>Truly was a work of art<br>I don't care what they say, I'm gonna do it anyway<br>It's the only thing I see, always staring back at me",
  russian: "Я заблудился в пустыне<br>Я думал, что я точно разваливаюсь на части<br>Боль, которую ты причинил, ранила так глубоко<br>Это было настоящее произведение искусства<br>Мне все равно, что они говорят, я все равно это сделаю<br>Это единственное, что я вижу, оно всегда смотрит на меня",
  audio: "8.1.mp3"
},
{
  english: "I've been left in the dark, standing cold in the night<br>Memories of your taste, I've been holding on tight<br>Falling apart and I'm living a lie<br>All of this time, I've been loving a liar<br><br>Pulled me in with your words so sweet<br>Every time I ignore the sign<br>Redemption's mine on the day I leave<br>Falling for you was my only crime",
  russian: "Я осталась в темноте, стоя в холоде ночи<br>Воспоминания о твоем вкусе, я крепко держалась<br>Разваливаюсь на части и живу во лжи<br>Все это время я любила лжеца<br><br>Ты затянул меня своими сладкими словами<br>Каждый раз, когда я игнорирую знак<br>Искупление ждет меня в тот день, когда я уйду<br>Влюбиться в тебя было моим единственным преступлением",
  audio: "8.2.mp3"
},
{
  english: "Pulled me in with your words so sweet<br>Every time I ignore the sign<br>Redemption's mine on the day I leave<br>Falling for you was my only crime<br>I don't care what they say, I'm gonna do it anyway<br>It's the only thing I see, always staring back at me",
  russian: "Привлек меня своими сладкими словами.<br>Каждый раз, когда я игнорирую знак,<br>Искупление ждет меня в тот день, когда я уйду.<br>Влюбиться в тебя было моим единственным преступлением.<br>Мне все равно, что они говорят, я все равно это сделаю.<br>Это единственное, что я вижу, оно всегда смотрит на меня.",
  audio: "8.3.mp3"
},
               // Supergirl
{
  english: "You can tell by the way<br>She walks that she's my girl<br>You can tell by the way<br>she talks she rules the world<br>You can see in her eyes<br>that no one is her chief<br>She's my girl - My Supergirl",
  russian: "По ее походке ты видишь, что это моя девушка<br>По ее речам ты осознаешь, что она правит миром<br>По ее взгляду ты понимаешь, что ничто ее не обременяет<br>Она моя девушка, моя супердевушка",
  audio: "9.1.mp3"
},

{
  english: "And then she'd say it's OK<br>I got lost on the way<br>But I'm a Supergirl<br>and Supergirls don't cry<br>And she'd say it's allright<br>I got home late last night<br>But I'm a Supergirl<br>and Supergirls just fly<br>",
  russian: "Она скажет: все в порядке, я сбилась с пути,<br>Но я супердевушка, а супердевушки не плачут<br>И объяснит: все нормально, вчера я добралась до дома поздно вечером,<br>Но я супердевушка, а супердевушки парят над суетой",
  audio: "9.2.mp3"
},

{
  english: "And then she'd say<br>that nothing can go wrong<br>When you're in love<br>what can go wrong<br>And then she'd laugh<br>the night time into the day<br>Pushing her fears further along",
  russian: "И тогда она говорила,<br>что ничто не может пойти не так,<br>Когда ты влюблен,<br>что может пойти не так,<br>И тогда она смеялась всю ночь и весь день,<br>Прогоняя свои страхи все дальше и дальше",
  audio: "9.3.mp3"
               
              },    


// Wasted
{
english: "Red roses on my grave this fall<br>End of the story<br>Act like a man but still like a child when my pet lion turns to wild<br>Come on, laugh! Why you are so quiet?<br>Take out your gun pull the trigger and fire!<br>It is not so hard. Just do it.",
audio: "10.1.mp3"
},

{
english: "Wasted Hope you delivered was<br>Wasted Rule you`ve been playing was<br>Wasted Faith you believe in was Wasted",
audio: "10.2.mp3"
},

{
english: "Hold this moment, build your reign<br>Don`t let this pointless guilt become your aim<br>Fix the cracks in road you laid<br>Even when your temple fell<br>Making mistakes<br>Like every human makes",
audio: "10.3.mp3"
            
},
// Shape of my heart
{
  english: "He deals the cards as a meditation<br>And those he plays never suspect<br>He doesn't play for the money he wins<br>He don't play for respect<br><br>He deals the cards to find the answer<br>The sacred geometry of chance<br>The hidden law of a probable outcome<br>The numbers lead a dance",
  audio: "11.1.mp3"
  },
  
  {
  english: "And if I told you that I loved you<br>You'd maybe think there's something wrong<br>I'm not a man of too many faces<br>The mask I wear is one<br><br>Well, those who speak know nothin'<br>And find out to their cost<br>Like those who curse their luck in too many places<br>And those who fear are lost",
  audio: "11.2.mp3"
  },
  
  {
  english: "I know that the spades are the swords of a soldier<br>I know that the clubs are weapons of war<br>I know that diamonds mean money for this art<br>But that's not the shape of my heart<br>That's not the shape, the shape of my heart",
  audio: "11.3.mp3"
                
  },

  // Don't speak
{
  english: "He deals the cards as a meditation<br>And those he plays never suspect<br>He doesn't play for the money he wins<br>He don't play for respect<br><br>He deals the cards to find the answer<br>The sacred geometry of chance<br>The hidden law of a probable outcome<br>The numbers lead a dance",
  audio: "12.1.mp3"
  },
  
  {
  english: "Don't speak, I know just what you're sayin'<br>So please stop explainin'<br>Don't tell me 'cause it hurts<br>Don't speak, I know what you're thinkin'<br>I don't need your reasons<br>Don't tell me 'cause it hurts",
  audio: "12.2.mp3"
  },
  
  {
  english: "Our memories, well, they can be inviting<br>But some are altogether mighty frightening<br>As we die, both you and I<br>With my head in my hands, I sit and cry",
  audio: "13.3.mp3"
                
  },
            
            
];



