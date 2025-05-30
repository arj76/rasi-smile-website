
export interface ChatResponse {
  text: string;
  quickReplies?: string[];
}

export const getChatbotResponse = (userMessage: string): ChatResponse => {
  const message = userMessage.toLowerCase().trim();

  // Greeting and initial responses
  if (message === "hello" || message === "hi" || message === "hey") {
    return {
      text: "Hello! I'm RasiBot 🦷—your virtual dental assistant. How can I help you today?",
      quickReplies: ["Clinic Hours & Location", "Services & Pricing", "Speak to a Human"]
    };
  }

  // Clinic Hours & Location
  if (message.includes("hours") || message.includes("location") || message.includes("address") || message === "clinic hours & location") {
    return {
      text: "📍 **Rasi Dental Clinic Location:**\nKarur, Tamil Nadu\n\n🕒 **Operating Hours:**\nMonday - Sunday: 10:00 AM - 8:00 PM\n\n📞 **Contact:** +91 81484 44798\n📧 **Email:** arjagadeeshwaran@gmail.com",
      quickReplies: ["Services & Pricing", "Speak to a Human"]
    };
  }

  // Services & Pricing
  if (message.includes("services") || message.includes("pricing") || message.includes("price") || message.includes("cost") || message === "services & pricing") {
    return {
      text: "🦷 **Our Dental Services:**\n\n• **General Dentistry** - Cleanings, fillings, root canals\n• **Orthodontics** - Braces, clear aligners, retainers\n• **Dental Implants** - Permanent tooth replacement\n• **Prosthodontics** - Crowns, bridges, dentures\n\nFor specific pricing, please call us at +91 81484 44798 for a personalized consultation.",
      quickReplies: ["Clinic Hours & Location", "Speak to a Human"]
    };
  }

  // Speak to Human
  if (message.includes("human") || message.includes("speak") || message === "speak to a human") {
    return {
      text: "I'd be happy to connect you with our team! 👨‍⚕️\n\n📞 **Call us directly:** +91 81484 44798\n📧 **Email:** arjagadeeshwaran@gmail.com\n\nOur staff is available during clinic hours (10 AM - 8 PM) to assist you personally.",
      quickReplies: ["Clinic Hours & Location", "Services & Pricing"]
    };
  }

  // Common dental FAQs
  if (message.includes("toothache") || message.includes("pain")) {
    return {
      text: "🦷 For tooth pain:\n• Rinse with warm salt water\n• Take over-the-counter pain relief\n• Apply cold compress outside cheek\n• Avoid very hot/cold foods\n\n⚠️ **Please call +91 81484 44798 immediately for severe pain or swelling!**",
      quickReplies: ["Services & Pricing", "Speak to a Human"]
    };
  }

  if (message.includes("cleaning") || message.includes("checkup")) {
    return {
      text: "🧼 **Dental Cleanings & Checkups:**\n• Recommended every 6 months\n• Prevents cavities and gum disease\n• Includes oral cancer screening\n• Professional plaque removal\n\nCall +91 81484 44798 to schedule your appointment!",
      quickReplies: ["Services & Pricing", "Speak to a Human"]
    };
  }

  if (message.includes("braces") || message.includes("orthodontic")) {
    return {
      text: "📐 **Orthodontic Treatment:**\n• Traditional metal braces\n• Clear aligners\n• Treatment typically 12-24 months\n• Payment plans available\n\nConsultation with Dr. A. R. Jagadeeshwaran available - call +91 81484 44798!",
      quickReplies: ["Services & Pricing", "Speak to a Human"]
    };
  }

  if (message.includes("implant")) {
    return {
      text: "🔧 **Dental Implants:**\n• Permanent tooth replacement\n• 95% success rate\n• Looks and feels natural\n• Lasts a lifetime with proper care\n\nSchedule a consultation: +91 81484 44798",
      quickReplies: ["Services & Pricing", "Speak to a Human"]
    };
  }

  if (message.includes("emergency") || message.includes("urgent")) {
    return {
      text: "🚨 **Dental Emergency?**\n\nCall us immediately: **+91 81484 44798**\n\nFor severe pain, trauma, or swelling, contact us right away. We prioritize emergency cases during clinic hours (10 AM - 8 PM).",
      quickReplies: ["Clinic Hours & Location", "Speak to a Human"]
    };
  }

  // Appointment booking - redirect to contact
  if (message.includes("book") || message.includes("appointment") || message.includes("schedule")) {
    return {
      text: "📅 To book your appointment, please contact us directly:\n\n📞 **Call:** +91 81484 44798\n📧 **Email:** arjagadeeshwaran@gmail.com\n\nOur team will help you find the perfect time slot!",
      quickReplies: ["Clinic Hours & Location", "Services & Pricing"]
    };
  }

  // Non-dental queries
  if (!message.includes("dental") && !message.includes("tooth") && !message.includes("mouth") && 
      !message.includes("gum") && !message.includes("clinic") && !message.includes("doctor") &&
      (message.includes("weather") || message.includes("news") || message.includes("recipe") || 
       message.includes("movie") || message.includes("sports") || message.includes("music"))) {
    return {
      text: "I don't have any knowledge on that topic. I am only built for answering dental queries. 🦷\n\nHow can I help you with your dental health today?",
      quickReplies: ["Clinic Hours & Location", "Services & Pricing", "Speak to a Human"]
    };
  }

  // Default response
  return {
    text: "I'm here to help with dental questions! 🦷\n\nYou can ask me about:\n• Clinic hours and location\n• Our dental services\n• Common dental concerns\n• How to contact our team\n\nWhat would you like to know?",
    quickReplies: ["Clinic Hours & Location", "Services & Pricing", "Speak to a Human"]
  };
};
