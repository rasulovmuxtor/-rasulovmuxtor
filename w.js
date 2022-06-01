let answers = [
    {question: "Veb sahifa narxi ikkita ko’rsatkich bilan bo’g’liq." , text: "Davomat va auditoriya xarakteristikasi",},
    {question: "Veb sayt foydalanuvchilarni jalb qilish usullari" , text: "Foydalanuvchilar sahifani qidirish tizimlari orqali topishi mumkin",},
    {question: "Sayt bu - …" , text: "Bir necha veb sahifa bo’lib, yagona struktura bo’yicha birlashtirilgan va umumiy manzilga ega",},
    {question: "URL termini - …" , text: "Resursga universal ko’rsatkich",},
    {question: "Internetda sahifa manzilidan nimadan tashkil topadi?" , text: "Domen nomi, saytdagi sahifaga yo’l va sahifa fayli nomi",},
    {question: "Qidirish tizimlari asosan nimalarga e’tibor qaratadi?" , text: "Foydalanuvchi talabi va uning taklifini tartibga soladi",},
    {question: "Saytdan foyda olishning necha xil usuli mavjud?" , text: "To’rtta: o’z mahsulotlarini va xizmatlarini sotish, boshqalarning mahsulotlarini va xizmatlarini sotish, saytda reklamani sotish, ma’lumot sotish",},
    {question: "Hamkorlik dasturining asosiy g’oyasi." , text: "Boshqalarning sotuvlarida ishtirok etish",},
    {question: "Hamkorlik dastur egasi ta’minlaydi:" , text: "Tovarni jo’natish, yaroqlilik muddati, tovar sifati",},
    {question: "Savdo-sotiqga oid bo’lmagan ma’lumotni foydalanuvchilarga taklif qiluvchi saytlar manbayi bu?" , text: "Hamkorlik dasturi",},
    {question: "Hamkorlik dasturni rivojlantirishda uning egasi ikkita yo’lgan borishi mumkin:" , text: "O’z brendini mustahkamlash, hamkorlarga o’z brendlarini yaratishga ruxsat berish",},
    {question: "Reklama joylarini muvaffaqiyatli sotish uchun sayt quyida talabga javob berishi lozim." , text: "Katta hajmli davomat, doimiy auditoriya",},
    {question: "FireBird MBBT ning o’rnatilgan MBlari uchun mo’ljallangan mahsuloti qaysi?" , text: "Unikal va auditoriyaga qiziqarli materiallarni yaratish",},
    {question: "Kontekstli-sezgir reklama -… " , text: "Qidiruv tizimlari va hamkor-saytlar qidiruv tizimidagi reklama",},
    {question: "Saytga foydalanuvchini olib keluvchi usul" , text: "C va B javoblar to’g’ri",},
    {question: "Trafik manbayi?" , text: "Barcha javoblar to’g’ri",},
    {question: "To’g’ri trafik bu?" , text: "Foydalanuvchi sayt manzilini manzil qatoriga kiritadi",},
    {question: "Ijtimoiy tarmoq lentalarida kontentni yaratuvchi mutaxassislar - …" , text: "SMM Social media marketing",},
    {question: "Qidiruv trafigi?" , text: "Qidiruv mashinalarida qidirish natijalari",},
    {question: "Tabiy yoki organik qidiruv" , text: "B va C javoblar to’g’ri",},
    {question: "Ranjirlash?" , text: "Saralash algoritmi, saytni yuritish",},
    {question: "Girpermatnli havola?" , text: "Havola matndan tashqariga, boshqa sahifaga olib boradi",},
    {question: "Qidiruv mashinasi?" , text: "Bu dastur Internetning predmet ko’rsatkichini tuzadi va saqlaydi",},
    {question: "Qidiruv roboti?" , text: "Sayt haqida ma’lumot yig’adi",},
    {question: "Indeksni yaratish yoki indekslash?" , text: "Qidiruv roboti barcha so’zlarni tanlab oladi va alifbo tartibida joylashtiradi",},
    {question: "Yuklab olish va indekslash bosqichi … amalga oshiriladi" , text: "Filtratsiyaning birinchi bosqichida",},
    {question: "Ranjirlash?" , text: "So’rovga moslik ko’z qarashdan trafikni tartibga solishdir",},
    {question: "Qoralama ranjirlash?" , text: "nomzodlarning hujjatlarini to'plash uchun qidiruv butun indeks bo'ylab amalga oshiriladi",},
    {question: "Adaptiv verstka?" , text: "Saytning verstkasi bo’lib mobil qurilmalar uchun transformatsiya qilinadi",},
    {question: "Apdeyt (update)?" , text: "Yangilash",},
    {question: "Baden-Baden”?" , text: "Yandeks algoritmi bo’lib sifatsiz SEO-matnlar uchun sahifaga filtr o’rnatadi.",},
    {question: "Ban?" , text: "Foydalanuvchi qidiruv natijasini foydalana olmaydi",},
    {question: "Yaroqsiz havola?" , text: "Mavjud emas sahifaga yo’naltiradigan havola",},
    {question: "Brauzer?" , text: "Barcha javoblar to’g’ri",},
    {question: "Brend trafigi, brend so’rovlari?" , text: "Kompaniya yoki sayt nomini so’rovga ko’rsatgan holda saytga o’tish",},
    {question: "Beklink(backlink)?" , text: "Havola qiluvchi sahifa, sahifaga havolar qiluvchi URL",},
    {question: "Vebvizor (Yandeks.Vebvizor)?" , text: "Barcha javoblar to’g’ri",},
    {question: "Vidjet (widget)?" , text: "Vebanalitika tizimidagi kichik grafik modul",},
    {question: "Vital so’rov?" , text: "Barcha javoblar to’g’ri",},
    {question: "Ranjirlashning tashqi faktorlari?" , text: "Sayt egasining tasir qila olmaydigan ranjirlash faktorlari",},
    {question: "Ranjirlashning ichki faktorlari?" , text: "Sayt egasining to’g’ridan to’gri tasir qila oladigan saytga tegishli faktorlar",},
    {question: "Hostning ichki direktivasi?" , text: "Faqat sayt ichiga bajariladigan qidiruv tizimiga ko’rsatma",},
    {question: "Vordstat (wordstat.yandex.ru)?" , text: "So’zlarni tanlash xizmati",},
    {question: "Saytdagi vaqt (TSS)?" , text: "Foydalanuvchi saytda qancha vaqt bo’lganligini ko’rsatadi",},
    {question: "Yuqori chastotali so’rovlar?" , text: "Qidiruv tizimidagi taniqli so’rovlar",},
    {question: "Geobog’liq so’rov?" , text: "Foydalanuvchi shahri yoki mintaqa hisobga olinadigan so’rov",},
    {question: "Domen (domen nomi)?" , text: "Manzil maydoniga kiritiladigan saytning Internetdagi manzili",},
    {question: "Dorvey?" , text: "Barcha javoblar to’g’ri",},
    {question: "Sahifa dubli?" , text: "Bir necha manzillar orqali kirish mumkin bo’lgan sahifa nusxasi",},
    {question: "Sayt ko’zgusi?" , text: "Boshqa manzilda joylashgan saytning aniq nusxasi",},
    {question: "Ko’rinish zonasi?" , text: "Qidiruv natijasida birinchi 30 o’rin",},
    {question: "Host nomi?" , text: "Tarmoq qurilmasiga belgilangan nom",},
    {question: "Intent (relevantlik holati)?" , text: "Barcha javoblar to’g’ri",},
    {question: "Axborot so’rov?" , text: "Sotib olish yoki boshqa maqsadsiz tarmoqda qidirish",},
    {question: "Saytning integral ko’rinishi?" , text: "Saytni yuritishdagi barcha kalit so’rovlarning ko’rinish dinamikasi",},
    {question: "Tsitata indeksi?" , text: "Barcha javpblar to’g’ri",},
    {question: "Kanonik havola?" , text: "Asosiy sahifaga tegishli deb qaraladigan qidirish tizimiga havola",},
    {question: "Sayt xaritasi?" , text: "Sahifa va bo’limlar ro’yhatidan iborat xizmat sahifasi bo’lib qidiruv robotlari uchun saytni indekslashni soddalashtiradi",},
    {question: "Klasterlash bu?" , text: "So’rovlarni guruhlash",},
    {question: "Klient skripti bu?" , text: "Saytdan yuklab olinadigan va foydalanuvchi brauzerida o’rinlanadigan dasturlar",},
    {question: "Klik-djeking bu?" , text: "Barcha javoblar to’g’ri",},
    {question: "Ranjirlashning klik faktorlari?" , text: "Qidiruv natijasidagi saytlarga havolalarga murojatlar",},
    {question: "Konversiya?" , text: "Barcha javoblar to’g’ri",},
    {question: "Top konversiyasi?" , text: "Barcha javoblar to’g’ri",},
    {question: "Koll-treking(call-tracking)?" , text: "Analitikada telefon qo’ng’iroqlarini hisobga olish usullari",},
    {question: "Lid?" , text: "Sotib olish istagida bo’lgan potensial xaridor",},
    {question: "Qidiruvning mantiqiy operatori?" , text: "Barcha javoblar to’g’ri",},
    {question: "Makrokonversiya?" , text: "Foydalanuvchining saytda foyda keltiradigan kalit amalni bajarishi",},
    {question: "Markerli so’rovlar (maska)?" , text: "Foydalanuvchilarni saytga olib keladigan asosiy so’rovlar",},
    {question: "Matriksnet?" , text: "Yandeksda saytlarni ranjirlaydigan mashinali o’qish usullari",},
    {question: "Mashinali morfologiya?" , text: "Barcha javoblar to’g’ri",},
    {question: "Mikrokonversiya?" , text: "Foydalanuvchining saytdagi foyda keltirmaydigan harakatlari",},
    {question: "Mikrorazmetka?" , text: "Barcha javoblar to’g’ri",},
    {question: "Minusinskt”?" , text: "Yandeks filtri bo’lib, to’lamli SEO-havolalar saytda yuritish uchun barcha sahifalarga joylashtiriladi",},
    {question: "Ko’p qo’lli bandit(Multi-Armed Bandit)?" , text: "Natijani aralashtiruvchi Yandeks algoritmi bo’lib, yuqori o’nlikdan o’rin olish imkonini beradi",},
    {question: "Moderator?" , text: "Forumning foydalanuvchisi yoki doimiy ishchisi bo’lib, boshqa foydalanuvchilarni jazolash yoki rag’batlantirish huquqiga ega",},
    {question: "Pozitsiya monitoringi?" , text: "Saytning qidiruv natijasidagi o’rnini tekshirish",},
    {question: "Navigatsion so’rov?" , text: "Tarmoqga aniq bir joyni topish istagidagi so’rovni kirituvchi foydalanuvchilar",},
    {question: "Matnni kalit so’zlar bilan boyitish?" , text: "Matnning umumiy ma’nosi saqlanib qolishi hisobga olinmasdan uni katta miqdordagi kalit so’zlar bilan to’ldirish",},
    {question: "Quyichastotali so’rovlar?" , text: "Barcha javoblar to’g’ri",},
    {question: "Saytning umumiy ko’rinishi?" , text: "Barcha kalit so’rovlar yig’indisi bo’yicha saytni yuritishning muvaffaqiyatligini tekshirib boruvchi ko’rsatkichi",},
    {question: "Optimizator?" , text: "Barcha javoblar to’g’ri",},
    {question: "So’rov parametri?" , text: "Qidiruv tizimi o’tish URLga uzatadigan parametrlar",},
    {question: "Parser?" , text: "Boshqa saytlardan kontentni avtomat yig’uvchi dastur",},
    {question: "Referal trafik?" , text: "Biror bir saytdan kelgan trafik",},
    {question: "Saytning ichki sahifalarini qayta linklash?" , text: "Barcha javoblar to’g’ri",},
    {question: "Qayta optimallashtirish?" , text: "Barcha javoblar to’gri",},
    {question: "Ranjirlashning harakatlar faktori?" , text: "saytni ranjirlashda qidiruv tizimi tomonidan hisobga olinadigan foydalanuvchi harakatlari.",},
    {question: "Sahifani yuritish?" , text: "barcha javoblar to'g'ri",},
    {question: "Qidiruv tizimi" , text: "Internetda qidirish uchun mo'ljallangan apparat-dasturiy majmua",},
    {question: "Qidiruv tizimini optimallashtirish?" , text: "Qidiruv tizimlarida saytning ko'rinishini oshirish",},
    {question: "Qidiruv havolalari?" , text: "Organik qidiruv natijalarida ko'rsatilgan saytlarga havolalar",},
    {question: "Qidiruv roboti (o'rgimchak)." , text: "barcha javoblar to'g'ri",},
    {question: "Spamni qidirish (spamdexing)" , text: "Qidiruv natijalarida sahifa reytingini oshirish uchun qidiruv tizimlarini va ularning tashrif buyuruvchilarini aldashning turli usullari",},
    {question: "Rad qilish ko’rsatkichi (bounce rate - BR)" , text: "Saytda kerakli narsani topa olmaydigan tahliliy tizimlar tomonidan tasniflangan tashrif buyuruvchilarning foizi",},
    {question: "Adashgan so'rovlar?" , text: "Saytingizdagi boshqa mavzu bilan bog'liq bo'lgan, lekin asosiy kalit so'zni o'z ichiga olgan so'rovlar",},
    {question: "To'g'ridan-to'g'ri havola?" , text: "Bog'langan sayt manzili to'g'ridan-to'g'ri <a href url> tegida joylashgan havola",},
    {question: "Saytga to'g'ridan-to'g'ri kirish?" , text: "Foydalanuvchilar o'zlari brauzerining manzil maydoniga sayt manzilini kiritganda saytga tashrif buyurish",},
    {question: "Qayta yo'naltirish?" , text: "Foydalanuvchini tanlangan sahifadan boshqa sahifaga majburan yo'naltiruvchi dasturiy yechim yoki skript",},
    {question: "Qidiruv natijalari?" , text: "barcha javoblar to'g'ri",},
    {question: "Referal trafik?" , text: "Har qanday saytdan kelgan trafik",},
    {question: "Referer?" , text: "Foydalanuvchi kelgan oldingi saytning manzili",},
    {question: "Runet (Rossiya Interneti)?" , text: "bu atama .ru domen zonasida joylashgan ko'plab saytlarga nisbatan qo'llaniladi",},
    {question: "Taqdim etuvchi (submitter)?" , text: "barcha javoblar to'g'ri",},
    {question: "Veb-sayt?" , text: "Yagona egasi va/yoki boshqaruvchisi boʻlgan foydalanuvchilarga taqdim etiladigan maʼlumotlarni oʻz ichiga olgan veb-sahifalar toʻplami",},
    {question: "Semantik yadro?" , text: "Qidiruv tizimlarida saytni ilgari surish baholanadigan asosiy qidiruv so'rovlari ro'yxati",},
    {question: "Server skripti?" , text: "Veb-dasturlash tillarida (PHP, Perl, ASP, JSP yoki CFML) yozilgan dastur saytni joylashtirgan veb-server tomonidan bajariladi",},
    {question: "Xizmat auditi (saytni ilgari surish bo'yicha mijozlarga xizmat ko'rsatish auditi)?" , text: "barcha javoblar to'g'ri",},
    {question: "Google ning harakatlar faktorini nazorat qiladigan quroli?" , text: "Google Analytics",},
    {question: "QueryDomCTR?" , text: "so'rov bo'yicha domen CTR.",},
    {question: "QueryUrlCTR?" , text: "so'rov bo'yicha hujjatning CTR",},
    {question: "QdwellTimeDev?" , text: "so'rov bo'yicha hujjatga ketgan vaqtning o’rtacha vaqtidan standart og'ish",},
    {question: "AvSatSteps?" , text: "qanoatlantirilgan qadamlarning o'rtacha soni.",},
    {question: "AvDwellTime?" , text: "turli qidiruv so'rovlari uchun tashrif buyuruvchining hujjatga sarflagan umumiy o'rtacha vaqti.",},
    {question: "DwellTimeDev?" , text: "saytda sarflangan o'rtacha vaqtdan standart og'ish",},
    {question: "90thDwellTime?" , text: "eng yuqori o'nlik, ya'ni saytda o'tkazgan o'rtacha vaqtning 90 foizi",},
    {question: "10thDwellTime?" , text: "saytdagi o'rtacha vaqtning pastki o'nligi",},
    {question: "TimeOnDomain?" , text: "saytdagi vaqt",},
    {question: "CompulativeDev?" , text: "kumlyativ og’ish",},
    {question: "Qidiruv reytingi nima?" , text: "Saytning sifati va dolzarbligini aniqlash uchun qidiruv tizimlari foydalanadigan omillar",},
    {question: "Teskari havola profili nima?" , text: "Saytga havola qilingan veb-saytlar ro'yxati",},
    {question: "Uzun kalit so'z nima?" , text: "3 dan ortiq so'zdan iborat so’rov",},
    {question: "Quyidagilardan qaysi biri ALT matnining afzali emas?" , text: "Bu sahifa yuklanishini yaxshilash uchun rasmlarni olib tashlash imkonini beradi",},
    {question: "Meta tavsifi nima?" , text: "Google sizning SERP ro'yxatida ko'rsatadigan sahifaning tavsifi",},
    {question: "Mahalliy SERP nima?" , text: "Joylashuvga asoslangan so'rovni qidirayotganingizda qayerda ekanligingizga qarab o'zgarib turadigan SERP",},
    {question: "Google tezkor javobini nima ta'riflaydi?" , text: "Muayyan so'rovlar uchun Google SERPlarda taqdim etadigan parchalar",},
    {question: "Domen kuchini nima eng yaxshi tavsiflaydi?" , text: "Sizning umumiy Google domeningiz qanchalik ishonchli va bu sizning barcha sahifalaringiz reytingiga ta'sir qiladi",},
    {question: "Kanonik bo'lmagan teg qanday rol o'ynaydi?" , text: "Bu tarjima qilinishi kerak bo'lgan sahifalarga ishora qiladi",},
    {question: "Muayyan kontent ataylab takrorlanayotgani Googlega bildirishning eng yaxshi usuli qanday?" , text: "Kanonik REL= tegidan foydalanish",},
    {question: "Angliyada ingliz tili uchun Hreflang tegini aniqlang" , text: "hreflang=en-gb",},
    {question: "Hreflang tegi nima?" , text: "Googlega kontentingiz qaysi tilda yozilganligi va uni qayerda koʻrsatilishini bildiruvchi teg (masalan, Venesuela va Meksika)",},
    {question: "Yomon havolalarni aniqlashda eng yaxshi harakat yo'nalishi qanday?" , text: "Google bilan havolani bekor qilish",},
    {question: "O'rtacha veb-saytdagi trafikning eng katta manbayi nima?" , text: "organik qidiruv natijalarida ko'rsatilgan saytlarga havolalar",},
    {question: "Qaytish darajasi nima?" , text: "Sizning saytingizga tushadigan va shug'ullanmasdan darhol bosadigan odamlar soni",},
    {question: "Quyidagi aktivlardan qaysi biri hozirda Google tomonidan boy fragment sifatida qabul qilinmaydi?" , text: "Mualliflar",},
    {question: "Rankbrainning maqsadi nima?" , text: "Googlega noyob so'rovlarni samarali boshqarishda yordam berish",},
    {question: "Yangi domenga o'tishda qaysi yo'naltirishdan foydalanish kerak?" , text: "301 yo'naltirish",},
    {question: "Google Search Console nima?" , text: "Sizning veb-saytingiz qanday skanerlashi va SERPda ko'rsatilishini kuzatish imkonini beruvchi Google tomonidan taqdim etilgan xizmat",},
    {question: "Quyidagilardan qaysi biri Google Search Console tomonidan taqdim etilgan xizmatlarni eng yaxshi tavsiflaydi?" , text: "Google siz xohlagan narsani skanerlashi va siz istamagan narsalarni skanerlashiga ishonch hosil qilish uchun yangi kontentni kuzatishishiz, saqlashishiz va yuborishishiz mumkin.",},
    {question: "Yandex-da bir nechta mintaqalarda reklama qilishning asosiy sharti nima?" , text: "To’g’ri javob yo’q",},
    {question: "Yandex.Metrika yordamida nimani tekshirish mumkin?" , text: "Barcha javoblar to’g’ri",},
    {question: "Qaysi hollarda saytni targ'ib qilishda 302 server javob kodi bilan qayta yo'naltirishdan foydalanish maqbul bo'ladi?" , text: "To’g’ri javob yo’q",},
    {question: "Google Search Console vositasi bilan nimani tekshirish mumkin?" , text: "Barcha javoblar to’g’ri",},
    {question: "Yandex qidiruv natijalarida parcha sarlavhasi sifatida nimadan foydalanish mumkin?" , text: "Barcha javoblar to’g’ri",},
    {question: "<link rel=canonical href=http://www.example.com/blog/> tegi sayt sahifasi kodida nima uchun ishlatilishi mumkin?" , text: "Barcha javoblar to’g’ri",},
    {question: "Vital so’rov - bu?" , text: "Rasmiy sayt mos keladigan brendni ko'rsatadigan so'rov",},
    {question: "Aniq so'rov chastotasi qanday?" , text: "4",},
    {question: "Google uchun indekslangan holda qoldirib, Yandex-da matnni indekslashdan yopish uchun qanday usul yordam beradi?" , text: "Matnni <noindex>…</noindex> tegiga almashtirish",},
    {question: "Https qidiruv tizimi bayonotlariga ko'ra reyting omili sifatida foydalaniladimi?" , text: "Ha, Google'da, Yandex'da hisobga olinishi mumkin",},
    {question: "Qaysi holatda Yandex.Metrikada Ichki o'tish hisobga olinadi?" , text: "Foydalanuvchining Yandex.Metrica hisoblagichi bo'lmagan sayt sahifasidan o'tishi",},
    {question: "Samarqandda konditsioner sotib olish degan so'rov katta ehtimollik bilan?" , text: "Geo-mustaqil",},
    {question: "Sarlavhaning maksimal uzunligi qancha?" , text: "Cheklanmagan",},
    {question: "Yandex.Metrica-da Google-dan brendli trafikni qanday ajratib ko'rsatish mumkin?" , text: "Ishonchli yo'llar yo'q",},
    {question: "Google'dagi DMCA filtri nimaga qarshi kurashmoqchi?" , text: "Kontentning buzilishi",},
    {question: "Baden-Baden xost filtri qoplamasini aniqlashning eng ishonchli usuli qanday?" , text: "Yandeks.Webmasterda belgilash",},
    {question: "Qidiruv natijalaridagi pozitsiyalarni o'zgartirmasdan saytga qidiruv trafigini qanday oshirish mumkin?" , text: "Joriy sarlavhalar, tavsiflar va belgilar yordamida parchalarni bosish tezligini oshiring”",},
    {question: "title haqidagi quyidagilarning qaysi biri to'g'ri?" , text: "Snippet sarlavhasi sifatida foydalanish mumkin",},
    {question: "Savol-rasm: bu elementlar bu erda qanday paydo bo'lgan?" , text: "Turbo texnologiyasi ulangan",},
    {question: "Google https://example.ru/test/ test bo'limida 10 sahifani indeksladi. Tavsiya etilgan usullardan qaysi biri ushbu sahifalarni Google qidiruv natijalaridan butunlay olib tashlaydi?" , text: "Ushbu sahifalarga HTTP asosiy autentifikatsiyasini o'rnatish",},
    {question: "Tashqi chiquvchi havolada qaysi atributdan foydalanish Googlega joylashtirish uchun toʻlanganiga ishora boʻlishi mumkin:" , text: "«rel=sponsored»",},
    {question: "Yandeksdagi Ko'p qurolli bandit  texnologiyasining asosiy maqsadi:" , text: "Ushbu hujjatlarni yuqori o'rinlarda ko'rsatish orqali hujjatlarning foydaliligi to'g'risida qaror qabul qilish uchun foydalanuvchi ma'lumotlarini to'plash",},
    {question: "Yandex uchun mintaqaviy subdomenlar haqida to'g'ri bayonotni tanlang?" , text: "Agar noto'g'ri sozlangan bo'lsa, pastki domenlar yopishtirilishi mumkin",},
    {question: "robots.txt-dagi Xost direktivasi nimaga ishora qiladi?" , text: "Pochtadagi asosiy oyna",},
    {question: "Yandex qidiruv natijalari URL manzilidagi ?lr= parametri quyidagilarga ishora qiladi:" , text: "Hududni qidirish",},
    {question: "Yandex-da cat operatori nimaga yordam berishi mumkin?" , text: "Tayinlangan hududlarni aniqlash",},
    {question: "301 yo'naltirish Yandex roboti tomonidan harakatlanayotganda qanday qayta ishlanadi?" , text: "Qayta yo'naltirish sahifasi qayta yo'naltirish maqsadi indekslanmaguncha qidiruv natijalaridan olib tashlanmaydi",},
    {question: "Google uchun sahifalash sahifalari o'rtasida qanday bog'lanish mumkin?" , text: "Barcha javoblar noto'g'ri",},
    {question: "Klasterlash - bu?" , text: "Kalit so'zlarni ochilish sahifalari bo'yicha taqsimlash",},
    {question: "Yandex.Direct-dagi reklama Yandex-dagi saytning SEO-ga qanday ta'sir qilishi mumkin?" , text: "Xulq-atvor omillarini yaxshilash yoki yomonlashtirish",},
    {question: "Yandex-dagi saytdagi yangi sahifani indekslashni qanday tezlashtirish mumkin?" , text: "Barcha javoblar to’g’ri",},
    {question: "Yandex uchun sayt targ'ib qilingan hududni qanday belgilashim mumkin?" , text: "Yandeks.Webmaster va Yandex.Directory orqali",},
    {question: "Qidiruv tizimi bayonotlariga ko'ra, meta-kalit so'zlar reytingda ishlatiladimi?" , text: "Googleda emas, balki Yandexda",},
    {question: "1000 ta belgi uchun nechta kalit so'zdan foydalanishim kerak?" , text: "To'g'ri javob Hammasi mavzu, so'rov va raqobatchilarga bog'liq",},
    {question: "So'nggi tadqiqotlarga ko'ra, saytning IQ darajasi o'rtasidagi eng katta bog'liqlik nimada?" , text: "Saytga umumiy trafik bilan",},
    {question: "Yandex indeksidagi URL manzilining yoshini qaysi qiymat eng ishonchli tarzda aks ettiradi?" , text: "Ushbu sahifa uchun Yandex.XML javobidagi <modtime> qiymati",},
    {question: "Intent bu?" , text: "Foydalanuvchining qidiruvga bo'lgan ehtiyoji",},
    {question: "Saytning asosiy sahifasiga ikki marta tashrif buyurilgan: ertalab soat 7 da va kechqurun 22 da. Shu bilan birga, birinchi tashrif shaxsiy kompyuterdan, ikkinchi tashrif esa mobil qurilmadan amalga oshirildi, lekin ikkalasi ham bir xil Yandex hisobiga kirgan. Yandex.Metrikada qancha tashrif buyuruvchilar, tashriflar, ko'rishlar aks etadi?" , text: "2 tashrifchi, 2 tashrif, 2 ko'rish",},
    {question: "Yandex.Webmaster-da Barcha so'rovlar va guruhlar hisoboti butun son bo'lmagan taassurotlar sonini ko'rsatadi. Nega?" , text: "Oxirgi 7 kunlik o'rtacha ma'lumotlardan foydalanilgan",},
    {question: "Monolit indeks nima?" , text: "Sahifadagi matnning yig'indisi va uning kiruvchi havolalarining langari",},
    {question: "Sitemap.xml haqida to'g'ri bayonotni tanlang?" , text: "Barcha bayonotlar haqiqatdir",},
    {question: "Yandex-da saytga tegishlilikning asosiy ko'rinishi nima?" , text: "Bitta so'rov bo'yicha TOP-10 ga tegishli saytlar guruhidan faqat bittasi ko'rsatilishi mumkin",},
    {question: "Sayt qidiruv tizimi indeksida paydo bo'lishi uchun ushbu shartlardan qaysi biri talab qilinadi?" , text: "Sayt sahifalari uchun HTTP kodi 2**",},
    {question: "Yandex.Wordstat xizmatiga qaysi so'rov turli morfologiyaga ega bo'lgan kalit so'zning chastotasi bo'yicha statistik ma'lumotlarni olish imkonini beradi, lekin kerakli so'z tartibida?" , text: "[Sankt-Peterburg Moskva]",},
    {question: "https://example.ru/televizory/?page=2 onlayn-do'konidagi sahifalash sahifasida kanonik manzil https://example.ru/televizory/. https://example.ru/televizory/?page=2 sahifasi indekslanadimi (boshqa taqiqlar yoki ruxsatlar bo'lmasa)?" , text: "Noma'lum",},
    {question: "Tekshirish byudjeti nima?" , text: " Qidiruv boti ma'lum vaqt oralig'ida skanerlashi mumkin bo'lgan sahifalar soni.",},
    {question: "Spektr nima?" , text: " Yandex-da qo'shimcha niyatlarga javoblarni chiqarish natijalariga aralashtiruvchi texnologiya",},
    {question: "robots.txt faylida Crawl-delay direktivasi haqida to'g'ri bayonotni tanlang" , text: "Yandeks va Google'da hisobga olinmaydi",},
    {question: "Onlayn do'kon ro'yxati sahifasi uchun optimal matn uzunligi qancha?" , text: "Hammasi mavzu, so'rov va raqobatchilarga bog'liq",},
    {question: "Yandex indeksidagi sahifaning yoshini qaysi qiymat eng ishonchli tarzda aks ettiradi?" , text: "Ushbu sahifa uchun Yandex.XML javobidagi <modtime> qiymati",},
    {question: "Yandex-dagi Ko'p qo’lli bandit texnologiyasining asosiy maqsadi:" , text: "Ushbu hujjatlarni yuqori o'rinlarda ko'rsatish orqali hujjatlarning foydaliligi haqida qaror qabul qilish uchun foydalanuvchi ma'lumotlarini to'plash",},
    {question: "Yandex-da saytga tegishlilikning asosiy ko'rinishi nima?" , text: "Bitta so'rov bo'yicha TOP-10da birlashgan saytlar guruhidan faqat bittasi ko'rsatilishi mumkin",},
    {question: "<link rel=canonical href=http://www.example.com/blog> yorlig'i sayt sahifasi kodida nima uchun ishlatilishi mumkin?" , text: "Barcha javoblar to’g’ri",},
    {question: "Mashinalar sotiladigan saytni reklama qilayotganda siz Yandex.Webmasterda bildirishnoma oldingiz. Ko'tarilgan so'rovlar uchun pozitsiyalar 20-40 punktga kamaydi. Oxirgi oyda siz saytga hech qanday o'zgartirish kiritmadingiz, saytda hech qanday e'lon yo'q. Vaziyatni tuzatish uchun birinchi navbatda qanday choralar ko'rish kerak?" , text: "Yandeksning texnik yordamiga xat yuboring",},
    {question: "Toshkentda konditsioner sotib oldegan so‘rov katta ehtimol bilan?" , text: "Geo-mustaqil",},
    {question: "Navoiyda konditsioner sotib olishso‘rovi yuqori ehtimollik bilan?" , text: "Geo-mustaqil",},
    {question: "Jizzaxda konditsioner sotib oldegan so'rov katta ehtimol bilan?" , text: "Geo-mustaqil",},
    {question: "Chilonzordan konditsioner sotib oldegan so‘rov katta ehtimol bilan?" , text: "Geo-mustaqil",}


];
var toInsert = document.createElement("div");
const style = document.createElement('style');
style.textContent = `
      body {
        -webkit-user-select: text !important;
        -khtml-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
    }
    `;
document.head.appendChild(style);
window.addEventListener("keydown", (e) => {
    if (e.altKey) {
        const text = window.getSelection().toString();
        toInsert.style.position = "absolute";
        toInsert.style.bottom = "0px";
        toInsert.style.textAlign = "center";
        toInsert.style.width = "100%";
        toInsert.style.color = "transparent";
        toInsert.onmouseover = function () {
            toInsert.style.color = "#606060";
        };
        toInsert.onmouseleave = function () {
            toInsert.style.color = "transparent";
        };
        toInsert.style.fontSize = "14px";
        toInsert.style.zIndex = "1000";
        toInsert.innerHTML = findText(text)
        document.body.appendChild(toInsert);
    }
});

function findText(question) {
    let result = []
    answers.forEach(item => {
        if (cleaner(item['question']).includes(cleaner(question))) {
            result.push(item['text']);
        }
    })
    if(result.length === 0) return "Topilmadi"
    return result.join(",")


}

const cleaner = (str) => {
    if (str) return str
        .replaceAll("`", "")
        .replaceAll("«", "")
        .replaceAll("»", "")
        .replaceAll("\n", " ")
        .replaceAll("'", "")
        .replaceAll("\u0027", "")
        .replaceAll("\"", "")
        .replaceAll("“", "")
        .replaceAll("”", "")
        .replaceAll("…", "")
        .replaceAll("...", "")
        .replaceAll("-", "")
        .replaceAll("–", "")
        .replaceAll(" ", " ")
        .replaceAll(" ", " ")
        .replaceAll("’", "")
        .replaceAll("  ", "")
        .replaceAll("   ", "")
        .replaceAll("    ", "")
        .trimStart()
        .trimEnd()
        .toLocaleLowerCase()
    return "";

}
