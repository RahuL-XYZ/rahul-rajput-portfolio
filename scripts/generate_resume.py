import os

def create_resume_pdf(filename="public/Rahul_Rajput_Resume.pdf"):
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    # Simple, robust PDF 1.4 generator
    objects = []
    
    def add_object(content):
        objects.append(content)
        return len(objects)

    # Content stream instructions
    lines = [
        "BT",
        "/F2 20 Tf 50 760 Td (RAHUL RAJPUT) Tj",
        "0 -16 Td /F2 11 Tf (FLUTTER DEVELOPER | MOBILE APPLICATION ENGINEER) Tj",
        "0 -14 Td /F1 9 Tf (Korba, Chhattisgarh, India | +91 7000036929 | rahul77478@gmail.com | linkedin.com/in/rahul-rajput-155616188) Tj",
        "ET",
        
        # Horizontal divider line
        "0.7 0.7 0.7 RG 1 w 50 715 m 550 715 l S",
        
        # Professional Summary
        "BT",
        "/F2 11 Tf 50 698 Td (PROFESSIONAL SUMMARY) Tj",
        "0 -13 Td /F1 9 Tf (Flutter Developer with 3.8+ years of experience engineering high-performance, cross-platform mobile applications) Tj",
        "0 -11 Td (for Android and iOS. Built and published 9 apps on Google Play Store and 8 on Apple App Store. Deep expertise in) Tj",
        "0 -11 Td (Dart, Riverpod, Provider, Clean Architecture, REST APIs, and real-time Firebase backend synchronization.) Tj",
        "ET",
        
        # Horizontal divider line
        "0.85 0.85 0.85 RG 0.5 w 50 655 m 550 655 l S",
        
        # Skills
        "BT",
        "/F2 11 Tf 50 640 Td (TECHNICAL SKILLS) Tj",
        "0 -13 Td /F2 9 Tf (Languages & Frameworks: ) Tj /F1 9 Tf (Flutter, Dart, React.js, JavaScript, Python, Django, FastAPI, Laravel) Tj",
        "0 -12 Td /F2 9 Tf (State Management: ) Tj /F1 9 Tf (Riverpod, Provider, GetX, Clean Architecture, MVVM) Tj",
        "0 -12 Td /F2 9 Tf (Backend & Databases: ) Tj /F1 9 Tf (Firebase Firestore, Auth, Push Notifications, REST APIs, Dio, WebSockets) Tj",
        "0 -12 Td /F2 9 Tf (Payments & Monetization: ) Tj /F1 9 Tf (Stripe, RevenueCat, Google Play Billing, Apple In-App Purchases) Tj",
        "0 -12 Td /F2 9 Tf (Tools & Platforms: ) Tj /F1 9 Tf (Git, GitHub, Postman, Android Studio, VS Code, CI/CD, JIRA) Tj",
        "ET",
        
        # Horizontal divider line
        "0.85 0.85 0.85 RG 0.5 w 50 568 m 550 568 l S",
        
        # Experience
        "BT",
        "/F2 11 Tf 50 552 Td (PROFESSIONAL EXPERIENCE) Tj",
        "0 -14 Td /F2 10 Tf (Codiant - A YASH Technologies Company) Tj /F1 9 Tf ( | Associate Software Engineer) Tj",
        "360 0 Td /F1 9 Tf (Apr 2023 - Present) Tj -360 0 Td",
        "0 -12 Td /F1 9 Tf (\\(o\\) Baurow: Built peer-to-peer rental marketplace with item listings, chat, push notifications, Stripe payments.) Tj",
        "0 -11 Td (\\(o\\) CalCounts Pro: Built tablet-optimized 10.5\\\" instructor dashboard for client progress and nutrition tracking.) Tj",
        "0 -11 Td (\\(o\\) HireGroww: Scaled multilingual hiring platform with video recording, candidate assessment, and REST APIs.) Tj",
        "0 -11 Td (\\(o\\) Fitterloop: Engineered responsive nutrition tracking, AI food scanning, and zero-jank 60fps Flutter UI.) Tj",
        "0 -11 Td (\\(o\\) Glowpeer: Implemented skincare routine tracker, social feed, product logging, and local push notifications.) Tj",
        
        "0 -16 Td /F2 10 Tf (Imaginar Technologies) Tj /F1 9 Tf ( | Associate Software Engineer) Tj",
        "360 0 Td /F1 9 Tf (May 2022 - Nov 2022) Tj -360 0 Td",
        "0 -12 Td /F1 9 Tf (\\(o\\) FoodIngram: Engineered multi-role food delivery platform for customers, restaurants, and delivery drivers.) Tj",
        "0 -11 Td (\\(o\\) Integrated Google Maps navigation, live order tracking, and dynamic cart state management.) Tj",
        "ET",
        
        # Horizontal divider line
        "0.85 0.85 0.85 RG 0.5 w 50 405 m 550 405 l S",
        
        # Featured Personal Projects
        "BT",
        "/F2 11 Tf 50 390 Td (NOTABLE PRODUCTION PROJECTS) Tj",
        "0 -13 Td /F2 9.5 Tf (Kharcha Paani \\(Mobile App & Web Admin\\): ) Tj /F1 9 Tf (Expense tracker and settlement system with live web admin portal.) Tj",
        "0 -11 Td /F1 8.5 Tf (Live Portal: https://kharchapaani-890b8.web.app | GitHub: github.com/RahuL-XYZ/Kharcha-Paani-Admin) Tj",
        "0 -12 Td /F2 9.5 Tf (Dine Visuals: ) Tj /F1 9 Tf (Digital interactive restaurant ordering and visual table management experience.) Tj",
        "0 -12 Td /F2 9.5 Tf (Scribeflo: ) Tj /F1 9 Tf (Doctor encounter assistant and voice-to-text medical transcription tool.) Tj",
        "ET",
        
        # Horizontal divider line
        "0.85 0.85 0.85 RG 0.5 w 50 315 m 550 315 l S",
        
        # Education
        "BT",
        "/F2 11 Tf 50 300 Td (EDUCATION) Tj",
        "0 -13 Td /F2 9.5 Tf (Master of Business Administration \\(MBA\\) - HR & Finance) Tj",
        "340 0 Td /F1 8.5 Tf (Aug 2020 - Jul 2022) Tj -340 0 Td",
        "0 -11 Td /F1 8.5 Tf (RKDF University, Bhopal \\(M.P\\)) Tj",
        
        "0 -13 Td /F2 9.5 Tf (Bachelor of Engineering \\(B.E.\\) - Computer Science) Tj",
        "340 0 Td /F1 8.5 Tf (Aug 2016 - Jul 2020) Tj -340 0 Td",
        "0 -11 Td /F1 8.5 Tf (SISTec, Bhopal \\(M.P\\)) Tj",
        "ET",
        
        # Footer
        "BT",
        "/F1 8 Tf 180 30 Td (Verified Official Dossier - Rahul Rajput | Flutter Developer) Tj",
        "ET"
    ]
    
    stream_content = "\n".join(lines).encode("latin1")
    stream_len = len(stream_content)
    
    # 1: Catalog
    # 2: Outlines
    # 3: Pages
    # 4: Page 1
    # 5: ProcSet / Resources
    # 6: Font F1 (Helvetica)
    # 7: Font F2 (Helvetica-Bold)
    # 8: Stream
    
    pdf_parts = []
    pdf_parts.append("%PDF-1.4\n")
    
    offsets = []
    
    def write_obj(num, content):
        offsets.append(sum(len(p) for p in pdf_parts))
        pdf_parts.append(f"{num} 0 obj\n{content}\nendobj\n")
        
    write_obj(1, "<< /Type /Catalog /Pages 3 0 R >>")
    write_obj(2, "<< /Type /Outlines /Count 0 >>")
    write_obj(3, "<< /Type /Pages /Kids [4 0 R] /Count 1 >>")
    write_obj(4, "<< /Type /Page /Parent 3 0 R /MediaBox [0 0 595 842] /Contents 8 0 R /Resources 5 0 R >>")
    write_obj(5, "<< /ProcSet [/PDF /Text] /Font << /F1 6 0 R /F2 7 0 R >> >>")
    write_obj(6, "<< /Type /Font /Subtype /Type1 /Name /F1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
    write_obj(7, "<< /Type /Font /Subtype /Type1 /Name /F2 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
    write_obj(8, f"<< /Length {stream_len} >>\nstream\n{stream_content.decode('latin1')}\nendstream")
    
    startxref = sum(len(p) for p in pdf_parts)
    xref = [f"xref\n0 9\n0000000000 65535 f \n"]
    for off in offsets:
        xref.append(f"{off:010d} 00000 n \n")
        
    trailer = f"trailer\n<< /Size 9 /Root 1 0 R >>\nstartxref\n{startxref}\n%%EOF\n"
    
    with open(filename, "wb") as f:
        for p in pdf_parts:
            f.write(p.encode("latin1"))
        for x in xref:
            f.write(x.encode("latin1"))
        f.write(trailer.encode("latin1"))
        
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    create_resume_pdf()
