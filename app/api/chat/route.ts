import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are "VIKAS AI Assistant", a professional digital service representative for VIKAS CSC – Fastrac Digital Service Provider.

Your personality and guidelines:
- You reply in friendly Hinglish (Hindi + English mixed) with a polite and confident tone
- Always write in clear, simple sentences — no slang
- Be respectful, caring, and build trust — especially with veterans, senior citizens, and patients
- Greet customers warmly (use their name if provided)
- Understand queries carefully before answering
- Give complete, step-by-step, easy-to-follow replies
- If the question is unclear, ask 1 short follow-up question

Services you can help with at VIKAS CSC:
1. Pension / Life Certificate (DLC, Sparsh)
2. Samman / Sambhal Card
3. Banking Services (account opening, passbook, etc.)
4. Aadhaar Services (new, update, print)
5. PAN Card Services
6. Passport Services
7. PM Schemes (Ayushman Bharat, PM Kisan, etc.)
8. Bill Payment (electricity, water, gas, phone)
9. Mobile & DTH Recharge
10. Insurance Services
11. Certificate Services (birth, death, income, caste)
12. E-District Services
13. Online Form Filling
14. Printing & Scanning Services

Always end your message with:
"धन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat."

Remember: Be helpful, friendly, and professional. Make customers feel valued and understood.`

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Simple rule-based response system
    const reply = generateResponse(message)

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Greetings
  if (lowerMessage.match(/\b(hello|hi|namaste|namaskar|hey|hii)\b/)) {
    return 'Namaste! 🙏 Main VIKAS AI Assistant hoon. Aapka VIKAS CSC mein swagat hai! Main aapki kaise madad kar sakta hoon? Aap pension, Aadhaar, banking, ya koi bhi digital service ke baare mein pooch sakte hain.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Pension related
  if (lowerMessage.match(/\b(pension|pensioner|life certificate|jeevan praman|dlc|sparsh)\b/)) {
    return 'Pension aur Life Certificate ke liye hum ye services provide karte hain:\n\n📋 **Life Certificate (Jeevan Praman Patra)**\n- Digital Life Certificate banane mein madad\n- Biometric device se certificate generation\n- Sparsh portal ke through submission\n\n💰 **Pension Services**\n- Pension account opening\n- PPO verification\n- Pension grievance resolution\n- Family pension registration\n\nKya aap Life Certificate banana chahte hain ya pension se related koi aur query hai? Bataaiye main aapki madad karun.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Aadhaar related
  if (lowerMessage.match(/\b(aadhaar|aadhar|adhaar|adhar|uid)\b/)) {
    return 'Aadhaar services ke liye VIKAS CSC mein ye facilities available hain:\n\n🆔 **Aadhaar Services:**\n- Naya Aadhaar Card enrollment\n- Aadhaar update (mobile, email, address)\n- Biometric update\n- Aadhaar print/download\n- Aadhaar PVC card order\n- Aadhaar demographic correction\n\n📄 **Documents required:**\n- Address proof\n- Identity proof\n- Date of birth proof\n\nAapko kaun si Aadhaar service chahiye? Bataiye main step-by-step guide de sakta hoon.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // PAN Card
  if (lowerMessage.match(/\b(pan|pan card|permanent account number)\b/)) {
    return 'PAN Card services VIKAS CSC mein available hain:\n\n💳 **PAN Services:**\n- Naya PAN card apply karna\n- PAN card correction/update\n- PAN-Aadhaar linking\n- Duplicate PAN card\n- PAN card print\n\n📋 **Required documents:**\n- Aadhaar card\n- Photo\n- Date of birth proof\n- Address proof\n\n⏰ **Processing time:** 15-20 din\n\nAap kaun sa PAN service lena chahte hain? Main puri process samjha sakta hoon.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Banking
  if (lowerMessage.match(/\b(bank|banking|account|passbook|cheque)\b/)) {
    return 'Banking services VIKAS CSC par available hain:\n\n🏦 **Banking Services:**\n- Bank account opening (Savings/Current)\n- Passbook print\n- Account balance enquiry\n- Mini statement\n- Cheque book request\n- AEPS (Cash withdrawal/deposit)\n- Money transfer\n\n💰 **Payment Services:**\n- Bill payment\n- Mobile recharge\n- DTH recharge\n\n📝 **Documents needed:**\n- Aadhaar card\n- PAN card\n- Passport size photo\n- Mobile number\n\nKaun si banking service chahiye aapko? Main help kar sakta hoon.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Passport
  if (lowerMessage.match(/\b(passport)\b/)) {
    return 'Passport services VIKAS CSC mein available hain:\n\n✈️ **Passport Services:**\n- Naya passport application\n- Passport renewal\n- Passport address change\n- Online form filling\n- Document verification help\n- Appointment booking support\n\n📋 **Documents required:**\n- Aadhaar card\n- Birth certificate\n- Address proof\n- Photos (white background)\n- Previous passport (renewal ke liye)\n\n⏰ **Processing:** Normal (30-45 din), Tatkal (7-10 din)\n\nAapko kaun sa passport service chahiye? Main poori guidance de sakta hoon.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // PM Schemes
  if (lowerMessage.match(/\b(pm|pradhan mantri|ayushman|kisan|ujjwala|awas|scheme|yojana)\b/)) {
    return 'PM Schemes aur Government Yojana services VIKAS CSC par available hain:\n\n🏛️ **Government Schemes:**\n- PM Ayushman Bharat (Health card)\n- PM Kisan Samman Nidhi\n- PM Ujjwala Yojana\n- PM Awas Yojana\n- PM Jan Dhan Yojana\n- Sukanya Samriddhi Yojana\n- Atal Pension Yojana\n\n📋 **Hum ye services dete hain:**\n- Registration aur enrollment\n- Status check\n- Card download/print\n- Application form filling\n- Document verification\n\nKaun si scheme ke baare mein jaanna chahte hain? Main detailed information de sakta hoon.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Bill payment & recharge
  if (lowerMessage.match(/\b(bill|payment|recharge|electricity|mobile|dth|gas|water)\b/)) {
    return 'Bill payment aur recharge services VIKAS CSC par available hain:\n\n💡 **Bill Payment:**\n- Electricity bill\n- Water bill\n- Gas bill (pipeline)\n- LPG booking\n- Broadband bill\n- Postpaid mobile bill\n\n📱 **Recharge Services:**\n- Prepaid mobile recharge\n- DTH recharge (Tata Sky, Airtel, Dish TV, etc.)\n- Fastag recharge\n- Metro card recharge\n\n✅ **Benefits:**\n- Instant payment\n- Multiple payment options\n- Receipt/confirmation turant mil jata hai\n\nKaun sa bill payment ya recharge karna hai? Bataaiye main process karta hoon.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Certificates
  if (lowerMessage.match(/\b(certificate|praman patra|janam|birth|death|income|caste|domicile)\b/)) {
    return 'Certificate services VIKAS CSC par available hain:\n\n📜 **Certificate Services:**\n- Birth Certificate (Janam Praman Patra)\n- Death Certificate (Mrityu Praman Patra)\n- Income Certificate (Aay Praman Patra)\n- Caste Certificate (Jaati Praman Patra)\n- Domicile Certificate (Niwas Praman Patra)\n- Character Certificate\n- OBC/SC/ST Certificate\n\n📋 **Process:**\n- Online application form filling\n- Document upload\n- Application tracking\n- Certificate download/print\n\n⏰ **Processing time:** 7-15 din (state ke according)\n\nKaun sa certificate chahiye aapko? Main application process mein help kar sakta hoon.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // General services query
  if (lowerMessage.match(/\b(service|services|kya|what|help|facility|facilities)\b/)) {
    return 'VIKAS CSC mein ye sab services available hain:\n\n✅ **Main Services:**\n1. Pension & Life Certificate (DLC, Sparsh)\n2. Aadhaar Services (new, update, print)\n3. PAN Card Services\n4. Banking Services\n5. Passport Services\n6. PM Schemes registration\n7. Bill Payment & Recharge\n8. Certificate Services (birth, income, caste)\n9. Insurance Services\n10. E-District Services\n11. Form Filling & Typing\n12. Printing & Scanning\n\n📍 Hum veterans, senior citizens, aur patients ki special care karte hain.\n\nKaun si service ke baare mein detail mein jaanna chahte hain? Poochiye main help karunga.\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Thank you / closing
  if (lowerMessage.match(/\b(thank|thanks|dhanyawad|shukriya|ok|thik hai|bye|goodbye)\b/)) {
    return 'Aapka bohot bohot swagat hai! 🙏 Koi bhi zaroorat ho toh VIKAS CSC yaad rakhiyega. Hum hamesha aapki seva ke liye ready hain.\n\nAap kabhi bhi vapas aa sakte hain. Aapki seva karke humein khushi milti hai! 😊\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
  }

  // Default response
  return 'Main samajh gaya aapka sawal. VIKAS CSC mein hum kai tarah ki digital services provide karte hain:\n\n- Pension aur Life Certificate\n- Aadhaar, PAN, Passport\n- Banking services\n- PM Schemes\n- Bill payment & Recharge\n- Certificates (birth, income, caste, etc.)\n\nKya aap thoda aur detail mein bata sakte hain ki aapko kis cheez mein help chahiye? Main aapki puri madad karunga! 😊\n\nधन्यवाद! 🙏 Aapka apna VIKAS CSC – Vikas ke sath aapke vikas ki baat.'
}
