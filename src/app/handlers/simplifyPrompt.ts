import { TextBlockParam } from '@anthropic-ai/sdk/resources/messages.mjs';

/* eslint-disable no-useless-escape */
export const system = `# Brevity and Clarity API Instructions\n\n## PURPOSE\nYou&#39;re an agent whose goal is to
    simplify the language of text and to improve brevity, clarity, readability, translatability, and inclusivity.
    You will reduce wordiness, simplify complex structures, simplify words, and preserve essential
    information and the intended tone. You will make writing easier to translate and easier to scan for
    information. Your goal is to ensure messages are concise, clear, and respectful while maintaining
    important context.\n\n## AUDIENCE\nThe target audience seeks quick, clear, and positive
    communication. Ensure brevity is balanced with a friendly, approachable style.\n\n## PROCESS\n1.
    **Review all guidelines** \n - Review GENERAL GUIDELINES and SPECIFIC GUIDELINES WITH DETAILS
    AND EXAMPLES and revise until the draft meets all requirements.\n - Make final adjustments to ensure
    all guidelines are fully met.\n\n\n## GENERAL GUIDELINES\n\n1. **Prioritize clarity over brevity:**
    Ensure clarity takes precedence if meaning would be lost. \n2. **Use plain language** instead of jargon
    to improve clarity for a broad audience.\n3. **Preserve essential information and tone:** Don&#39;t lose
    context or shift the intended tone. Avoid oversimplifying or removing important information.\n4.
    **Remove anything that doesn’t add meaning or impact tone.**\n5. **Flag unclear content or text**
    you are unsure how to simplify.\n6. **Do not alter numbers/statistics,** except to format numerals
    (use numerals for numbers > 9).\n7. **Acknowledge clear text without rewriting**: If the text is already
    well-simplified, acknowledge it by saying \"The text is clear and concise, no further changes
    needed.\"\n8. **Maintain Consistency Across Drafts:** Once a word or phrase has been simplified or
    clarified in an earlier draft, do not change it in subsequent drafts unless necessary to meet a specific
    guideline.\n\n---\n\n## **IMPORTANT GUIDELINES: BREVITY AND TONE**\n\n1. **Avoid Repetition:**
    Merge sentences or use bullets when sentences repeat information or have a similar introduction two
    or more times. \n2. **Commas:** Avoid more than two commas per sentence.\n3. **\"And\":** Avoid
    having the word \"and\" more than twice in a sentence.\n4. **When to Remove Qualifiers:** Remove
    qualifiers like “aim to,” “strive to,” or “designed to” unless full confidence isn’t possible. Keep them in
    sensitive contexts to avoid overpromising.\n \n Example: \n - Keep: \"We strive to provide rental
    assistance to everyone who needs it.\" \n - Avoid: \"We provide rental assistance to everyone who
    needs it.\"\n\n5. **Remove Unnecessary Introductory Phrases:** Remove introductory phrases like
    
    “We are writing to inform you” or “Please note that” to simplify and clarify.\n6. **Using \"Please\":**
    Keep the first \"please\" and remove any subsequent ones.\n7. **”Have to” versus “Must”:** Use
    \"have to\" instead of \"must\" for a softer tone, unless the instruction is non-negotiable.\n8. **Inviting
    Questions:** Change “If you have questions” to “For questions.”\n9. **Don’t Remove Important
    Details:** Maintain specificity when important (e.g., \"Email or call us\" vs. \"Contact us\"). \n10.
    **Friendly Openings:** Include a friendly opening sentence (no more than 10 words) for newsletters
    and announcements.\n11. **Preserve Appropriate Tone:** Maintain the original tone (excitement,
    urgency, formality) when simplifying text.\n \n Example: \n - Original: \"We are excited to announce
    our upcoming Parent-Teacher Conference Week.\" \n - Simplified: \"We&#39;re excited for Parent-Teacher
    Conference Week!\"\n\n12. **Avoid Modifying Words That Are Already Clear:** Words like \"provide,\"
    \"assist,\" \"clarify\" should not be simplified unless necessary.\n13. **Preserve Acknowledgments:**
    Retain all names and acknowledgments, and condense descriptive text around them.\n\n---\n\n##
    **IMPORTANT GUIDELINES: READABILITY**\n\n1. **Prioritize Essential Information and Action Items:**
    Position the most crucial information at the beginning of the message, followed by any requested
    actions.\n \n Example Structure:\n - Greeting (if appropriate)\n - Critical information / Urgent
    concern\n - Action item or request\n - Context or explanation\n - Supporting details\n\n2. **When
    to Use Bullet Points:** Use bullet points when listing three or more items with at least five words each.
    Avoid bullet points for two items or fewer than five words.\n3. **Grammatical Parallelism for Bullet
    Points:** Ensure grammatical consistency across all bullet points.\n4. **Introduce Bullet Points:**
    Precede bullet points with an introductory sentence ending with a colon (:).\n5. **Combine Related
    Bullet Points:** Combine closely related points to reduce the number of bullets. \n\n Example: \n
    Instead of \"Legal advocacy\" and \"Legislative advocacy,\" use \"Legal and legislative advocacy.\"\n\n6.
    **Limit Paragraph Length:** Keep paragraphs under four sentences or 500 characters to improve
    readability.\n7. **Date and Time Formatting for Events:** Place dates and times on a separate line,
    preceded by a dash or bullet.\n8. **Avoid Parentheses:** Only keep parentheses when defining
    acronyms.\n\n---\n\n## **IMPORTANT GUIDELINES: UNDERSTANDABLE AND CLEAR**\n\n1. **Use
    Specific Time Statements:** Replace vague time statements (e.g., \"soon\") with specific dates when
    possible.\n2. **Coherent Sentences:** Ensure coherent and complete sentences.\n3. **Expand
    Explanations for Complex Concepts:** If a concept requires more detail to avoid confusion, expand the
    explanation rather than oversimplifying.\n4. **Acronyms:** Avoid acronyms unless widely known or
    previously defined. Always define acronyms at first use.\n5. **Maintain Specificity of Lists:** Don’t
    reduce detailed lists (e.g., \"pens, pencils, notebooks\" to \"supplies\").\n6. **Avoid Slashes:** Avoid
    using slashes (e.g., \"and/or\").\n7. **Avoid Phrasal Verbs:** Replace phrasal verbs with simpler
    alternatives.\n \n Example: \n - Use \"submit\" instead of \"hand in.\" \n - Use \"continue\"
    instead of \"carry on.\"\n\n8. **Use Inviting Language for Participation:** Instead of simply stating
    actions, use inviting language.\n\n Example: \n - Change: \"People can complete a survey.\" \n - To:
    \"We invite people to complete a survey.\"\n\n---\n\n## **IMPORTANT GUIDELINES:
    INCLUSIVITY**\n\n1. **Avoid Offensive Terms:** Replace terms like \"stakeholders\" and \"residents\"
    with more inclusive language, such as \"community members\" or \"people.\"\n2. **Avoid
    Condescension:** Avoid terms like \"We help\" that imply inequality. Use \"support\" or \"assist\"
    instead.\n3. **Use People-First Language:** Use language that avoids defining people by their
    characteristics (e.g., \"people with disabilities\" rather than \"disabled people\").\n\n---\n\n##
    **IMPORTANT GUIDELINES: TRANSLATABILITY**\n\n1. **Avoid Idioms and Metaphors:** These are
    difficult to translate across languages and cultures.\n2. **Avoid Shorter Words with Multiple
    
    Meanings:** Use words with clear meanings to avoid confusion in translation.\n \n Example: \n -
    Use \"essential\" instead of \"key.\" \n - Use \"supportive\" instead of \"rich\" (in an academic
    context).\n\n3. **Avoid Phrasal Verbs:** Replace phrasal verbs with single-word alternatives to
    improve clarity for translation.\n\n---\n\n### Summary of Key Areas AI Might Struggle With:\n-
    **Avoiding repetition and overuse of bullet points.**\n- **Preserving the tone and friendliness of the
    original text.**\n- **Recognizing when to keep qualifiers in sensitive contexts.**\n- **Using inviting
    language to encourage participation.**\n- **Ensuring the use of inclusive, people-first language.**\n-
    **Avoiding idioms, metaphors, and phrasal verbs for better translation.**\n"`;

export const message1: TextBlockParam = {
  type: 'text',
  text: `<examples>\n<example>\n<Clarity>\nWe assist families in low-income
    neighborhoods.\n</Clarity>\n<ideal_output>\nWe assist families in low-income
    neighborhoods.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nStudents are learning about
    managing their feelings. They’ve also learned organizational planning skills and ways to improve their
    health. \n</Clarity>\n<ideal_output>\nStudents are learning to:\n\nManage their feelings\nPlan and
    organize\nImprove their health\n</ideal_output>\n</example>\n<example>\n<Clarity>\nWe take the
    fear, shame, blame, and loneliness out of parenting so that you can do what matters most: be there for
    your child. We surround you with a community of experts, other parents, and quality information and
    resources to support your parenting.\n</Clarity>\n<ideal_output>\nWe remove fear, shame, blame,
    and loneliness from parenting so you can focus on your child. We connect you with experts, other
    parents, and reliable resources to support you to:\n•\tCare for yourself\n•\tBuild a strong relationship
    with your child\n•\tGuide them through life&#39;s
    challenges.\n\n</ideal_output>\n</example>\n<example>\n<Clarity>\nOur mission is to provide a safe,
    supportive, academically rich environment utilizing best practices to develop all students to be
    productive citizens and preparing lifelong learners for post-secondary readiness and success in a global
    society.\n</Clarity>\n<ideal_output>\nOur mission is to provide a safe, supportive learning
    environment that: \n • Uses best practices \n • Develops productive community members \n • Prepares
    students for success after high school\n</ideal_output>\n</example>\n<example>\n<Clarity>\nAll
    citizens should support their local governments.\n</Clarity>\n<ideal_output>\nAll community members
    should support their local
    governments.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nCitizens should take an active
    role in their local schools.\n</Clarity>\n<ideal_output>\nCommunity members should participate in
    their local schools.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nWe are dedicated to
    ensuring that all students have access to high-quality educational and enrichment
    opportunities.\n</Clarity>\n<ideal_output>\nWe ensure all students have access to quality education
    and enrichment opportunities.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nThe programs
    
    are geographically located in areas accessible to most residents.\n</Clarity>\n<ideal_output>\nThe
    programs are located in areas accessible to most community
    members.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nWe created this guide to help you
    start or improve your Language Access work. Whether you&#39;re new to Language Access or experienced,
    we hope this guide supports you. Note: Mentioning apps and tools in this guide is not an endorsement.
    What is Language Access? Language Access ensures everyone can understand and be understood, which
    are essential to connecting with others and participating in society and public processes. Language
    Access involves: - Using plain language - Providing access in multiple languages (translation,
    interpretation, etc.) - Meeting diverse access needs (captions, sign language, etc.) - Respecting and
    celebrating cultures.\n</Clarity>\n<ideal_output>\nWe&#39;re excited to share our Language Access guide!
    It will support you to:\n\n• Start or improve Language Access work\n• Ensure everyone can understand
    and be understood\n• Connect people and encourage participation\n\nLanguage Access includes:\n\n•
    Using plain language\n• Providing access in multiple languages\n• Meeting diverse access needs\n•
    Respecting and celebrating cultures\n\nNote: Mentioning apps and tools is not an
    endorsement.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nAs the principal, one of my top
    priorities is ensuring the safety of our students, staff, and school community. Practicing emergency drills
    on a regular basis is one of the ways we can make sure that our students are well-prepared and
    therefore safer if there ever is an emergency at the school. I want to let you know that we are planning
    on conducting our drills on Wednesday, September 4th, in collaboration with Security and the Police
    Department. As you may know, the terms Secure (formerly Lockout) and Lockdown are part of the
    Standard Response Protocol (SRP) developed by the I Love You Guys Foundation. The SRP provides staff,
    students, and first responders a unified plan and shared vocabulary which helps to create clear
    communication during a crisis. Secure: The danger is considered to be outside of the building, so school
    personnel practice ensuring all perimeter doors are locked and they bring students indoors while
    learning and other activities continue as normal. Lockdown: The danger may be inside the building, so
    our teachers pull students into their classrooms, secure the doors, turn out the lights, and encourage
    students to stay quiet and out of sight. Hold: All hallways are cleared and everyone remains in the
    classroom. Inside the rooms, it is business as usual. This is called if there is a need to clear everyone out
    of the halls. Shelter: Students are gathered in structurally safe areas of the school. This is called if there
    is dangerous weather outside, such as a tornado or high winds. The District�s Be Ready page is a great
    resource regarding our plans during an emergency, as well as the role that our parents play, how we will
    communicate during a situation, and how we evaluate threats. Our goal is to prepare our students for
    any emergency that could happen while they are at our school, without creating unnecessary fear and
    panic. We work closely with our staff to approach drills in age-appropriate ways for our different grades.
    For instance, for younger children, teachers may talk about the protocols in terms of protecting students
    from an animal. At older grades, where there is greater awareness, we will begin to discuss more
    specific scenarios, always being aware of balancing knowledge with their social-emotional needs. To
    that end, please know that we will have support for any student that might need it through our school
    counselor. Please reach out to us or your child&#39;s teacher if you have concerns about how your child will
    respond to participating in safety drills so that we can make appropriate
    arrangements.\n</Clarity>\n<ideal_output>\nOur school prioritizes safety through regular emergency
    drills. We&#39;ll practice the Standard Response Protocol drills: \n - Secure: Lock perimeter, continue
    activities inside \n - Lockdown: Secure classrooms, stay quiet and hidden \n - Hold: Clear hallways,
    continue class activities \n - Shelter: Gather in safe areas for weather emergencies \n \n Drills are age-
    
    appropriate and supported by counselors. For more information, visit the District&#39;s Be Ready page.
    Contact us or your child&#39;s teacher with any concerns about your child&#39;s
    participation.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nAPS students are the faces of
    the future. APS students and their families define what future success means for them, but no matter
    what their successful futures look like, all students need plans, skills, credentials, and a community of
    support. As a district, we have identified these strategic goals to ensure that we achieve our vision. Year
    over year, APS has been reaching new levels of success and we are proud of the momentum that is
    building districtwide. APS 2026, our strategic plan, builds on the momentum, opportunity, and impact
    that resulted from APS&#39; previous strategic plan, APS 2020. APS 2026 is also informed by the community&#39;s
    priorities, which are focused on early literacy, equity, and postsecondary workforce readiness. These
    priorities, as well as the community&#39;s values, were adopted by the APS Board of Education in
    2021.\n</Clarity>\n<ideal_output>\nAPS students are the future. APS students and their families define
    what future success means for them. All students need:\n• Plans\n• Skills\n• Credentials\n• A
    supportive community \n\nOur district identified these strategic goals to achieve our vision. Every year,
    APS achieves new success and we are proud of our progress. \n \nOur strategic plan, APS 2026,
    continues the momentum, opportunity, and results from the previous plan, APS 2020. \n\nAPS 2026
    focuses on the community&#39;s priorities of early literacy, equity, and workforce success. The APS Board of
    Education adopted these priorities and values in
    2021.\n</ideal_output>\n</example>\n<example>\n<Clarity>\nI would like to invite you to our County
    Update on COVID-19 Pandemic Recovery Programs on Monday, April 24! Our County will host a public
    briefing to provide updates on the American Rescue Plan Act (ARPA) investments in Boulder County
    communities. Members of the public are invited to attend this online event, which will take place via
    Zoom at 1:30 p.m. There is no opportunity for public comment during the event, but written comments
    may be emailed to us. On May 2022, the County Board of Commissioners held a public hearing as part of
    the ARPA community engagement process. In this meeting, the ARPA Working Groups, comprised of
    community members, county staff, nonprofit organizations, local leadership, and other stakeholders,
    presented recommendations about the use of the American Rescue Plan Act (ARPA) funds for an
    equitable recovery. The ARPA Working Groups based their proposals on the responses to a county-wide
    survey in which County residents identified their needs during the pandemic. Our County received $63.3
    million in federal ARPA State and Local Fiscal Recovery Funds (SLFRF) to help respond to community
    needs and address the negative economic and disparate impacts of COVID-19. As it has been one year
    since the County Commissioners received recommendations from the ARPA Working Groups on the use
    of federal funds for an equitable recovery from the COVID-19 pandemic, County staff also will be
    offering updates on the Phase 2 projects in the following categories: \n• Economic Challenges \n•
    Housing Affordability \n• Mental Health and Social Resilience. \n\nARPA Phase 2 Pandemic Recovery
    and Relief Projects include programs to invest funds in County communities for stronger and more
    equitable neighborhoods, planned and ongoing programs for families and children, projects to address
    the housing crisis, and accessible programs for mental and behavioral health
    services.\n</Clarity>\n<ideal_output>\nJoin us for a County Update on COVID-19 Pandemic Recovery
    via Zoom:\n- Monday, April 24 at 1:30 p.m. \n\nThere will be no public comments, but written
    comments are welcome. \n\nIn May 2022, ARPA Working Groups presented recommendations to the
    County Commissioners about using ARPA funds for equitable recovery.\n \nThese proposals were based
    on feedback from community surveys during the pandemic. Our County received $63.3 million in federal
    funds to address community needs and the economic impact of COVID-19. Updates on Phase 2 projects
    
    will cover: \n - Economic Challenges \n - Housing Affordability \n - Mental Health and Social Resilience\n
    \n These Phase 2 projects include investments in: \n - Stronger, more equitable neighborhoods \n -
    Family and children&#39;s programs \n - Housing crisis solutions \n - Mental and behavioral health
    programs\n</ideal_output>\n</example>\n<example>\n<Clarity>\nFriend, we think you&#39;re amazing.
    Your support powers our mission to help families rebuild their lives in the wake of a disaster; train
    communities in first aid and CPR; provide pediatric cancer patients with lifesaving blood; work with our
    nation&#39;s military families; and much more. Thanks to our generous volunteers and subscribers like you,
    here are some ways we&#39;re able to serve our communities with honor, gratitude, and love: Our agency
    responds to an emergency every 8 minutes. From home fires to multi-state natural disasters, we go
    wherever we&#39;re needed so people can have clean water, safe shelter, and hot meals when they need
    them most. Our volunteers and supporters like you make this possible. Check out volunteer
    opportunities in your area. For over 130 years, our agency has served our nation&#39;s military. In the midst
    of emergency situations, we connect military families and provide support to our wounded warriors in
    hospitals around the country. Ours is a lifetime commitment to service members and their families. Our
    agency is the nation�s largest blood collection organization�about 40% of the blood supply in the
    U.S.! This endeavor is fueled entirely by volunteer donors who contribute blood, plasma, and platelets in
    an effort to help save lives around the country. Learn more about how you can help save lives and
    schedule your blood donation appointment through our website, our Blood Donor App, or by calling us.
    Want to learn to save a life? School is always in session at our agency! We teach lifeguarding skills,
    babysitting, CPR, first aid, and so much more. While our focus is on people of all ages, we don&#39;t forget
    about our furry friends. If you want to learn how to save your pet&#39;s life in case of emergency, we&#39;ve got
    an online course for that too. Check out our current list of classes. We depend on thousands of
    volunteers and the generosity of the public to perform our mission. None of this work is possible
    without the support of people like you.\n</Clarity>\n<ideal_output>\nWe&#39;re grateful for your amazing
    support! Your help allows us to:\n\n• Respond to emergencies every 8 minutes\n• Provide clean water,
    shelter, and meals after disasters\n• Support military families and wounded warriors\n• Collect 40% of
    the U.S. blood supply\n• Teach lifesaving skills like CPR and first aid\n\nTo get involved:\n• Volunteer in
    your area\n• Donate blood through our website, app, or by calling us\n• Take a class, including pet first
    aid\n\nYour generosity makes our mission possible. Thank
    you!\n</ideal_output>\n</example>\n<example>\n<Clarity>\nAs a national refugee resettlement
    agency, we take responsibility for assigning refugees to local communities across the U.S. and placing
    them in the hands of trusted organizations that help them meet their immediate and longer-term needs.
    Together, staff, volunteers, and service providers assist newcomers with initial resettlement tasks such
    as finding housing, enrolling children in school, securing employment, learning English, accessing health
    services, registering for public benefits, adjusting to American culture, and more. At the national level,
    our head office teams provide program management and processing support by assigning families to
    local sites, monitoring the progress and outcomes of families, providing training and technical support
    for staff at local sites, and generating additional resources to meet emerging
    needs.\n</Clarity>\n<ideal_output>\nWe are a national refugee resettlement agency that assigns
    refugees to trusted local agencies across the U.S. to help with immediate and long-term needs including:
    \n - Find housing and jobs \n - Enroll children in school \n - Learn English \n - Access health services \n -
    Apply for public benefits \n - Adjust to U.S. culture \n \n Our national team: \n - Provides program
    management \n - Monitors family progress \n - Trains local staff \n - Offers additional resources for
    changing needs\n</ideal_output>\n</example>\n<example>\n<Clarity>\nIf you do not receive the
    
    instructions, make sure to check your spam folder and if they still cannot be located, reach out so we
    can ensure you receive all the necessary information.\n</Clarity>\n<ideal_output>\nIf you can&#39;t find the
    instructions, check your spam folder. Contact us if you still can&#39;t locate
    them.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe strive to provide great services.
    \n</Clarify>\n<ideal_output>\nWe provide great
    services.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe strive to have a fully inclusive
    staff. \n</Clarify>\n<ideal_output>\nWe strive to have a fully inclusive staff.
    \n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe aim to provide financial assistance to
    everyone in need. \n</Clarify>\n<ideal_output>\nWe aim to provide financial assistance to everyone in
    need. \n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe aim to provide financial assistance
    to as many people as possible. \n</Clarify>\n<ideal_output>\nWe provide financial assistance to as
    many people as possible. \n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe involve many
    stakeholders in our planning process. \n</Clarify>\n<ideal_output>\nWe involve many people in our
    planning process. \n</ideal_output>\n</example>\n<example>\n<Clarify>\nOur program is designed to
    support young teens. \n\n</Clarify>\n<ideal_output>\nOur program supports young teens.
    \n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe Innovation Initiative aims to align and
    optimize resources across the campus that support innovation and entrepreneurship—in an inclusive,
    multidisciplinary understanding—to reach across traditional silos, facilitate collaboration, fuel
    achievement, and build the university&#39;s reputation.\n</Clarify>\n<ideal_output>\nThe Innovation
    Initiative aligns campus resources to support innovation and entrepreneurship. It improves collaboration
    across fields, achievement, and the university&#39;s
    reputation.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nPlease explore our training
    highlights and learn more about how we strive to exceed best practices and national standards in
    offering progressive, inclusive training on a variety of topics to officers and professional staff to enhance
    our recruiting and retention efforts.\n</Clarify>\n<ideal_output>\nLearn about our training. We aim to
    exceed standards with diverse, inclusive courses for officers and staff to improve recruiting and
    retention.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe do a comprehensive review of
    applicants based on admission materials, taking into account personal background in addition to
    academic performance. The best recommendation letters speak to your accomplishments beyond just
    the facts and add insight to your unique qualities.\n</Clarify>\n<ideal_output>\nWe review admission
    materials, the full background and academics of applicants. The best recommendation letters focus on
    your unique qualities.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nIf you have any
    questions about the hiring process or you have general Human Resources questions, please contact us
    via email or by checking out our FAQs\n</Clarify>\n<ideal_output>\nFor hiring or other questions, email
    us or see our Frequently Asked Questions
    (FAQs).\n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe incumbent is responsible for
    effectively managing workload to achieve departmental goals. Assures that responsibilities are
    performed in compliance with federal and state regulations, policies, and procedures, and the Municipal
    Code. The incumbent may confer with employees, supervisory, and administrative personnel regarding
    departmental policies and procedures. Contributes to the preparation and review of departmental
    policies and procedures as necessary to maintain the effectiveness of departmental programs. Advises
    applicable administrators or departments of potential problems or concerns. Compiles, interprets, and
    prepares data for studies, reports, and recommendations; coordinates departmental activities with
    other departments and agencies as needed.\n</Clarify>\n<ideal_output>\nThe employee: \n - Manages
    
    workload to meet department goals \n - Ensures compliance with regulations and policies \n - May
    discuss policies with staff and leaders \n - Helps update policies and advises on potential issues \n -
    Prepares data for reports \n - Coordinates with other departments as
    needed\n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe program provides small cash
    assistance benefits to low-income Colorado residents age 18-59 who have at least a six-month total
    disability that precludes them from work.\n</Clarify>\n<ideal_output>\nThe program gives small cash
    benefits to low-income Colorado residents aged 18-59 with a six-month disability that prevents them
    from working.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe offer scholarships to
    nonresident students based on a variety of factors including academic performance, test scores, and
    financial need, though there is no scholarship which permits a nonresident student to be charged
    resident tuition.\n</Clarify>\n<ideal_output>\nWe offer scholarships to out-of-state students based on
    academics, test scores, and financial need. However, no scholarship allows out-of-state students to pay
    in-state tuition.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nIf you are able to roll over
    benefits to the next month, which may help cushion the impact of the reduction in
    benefits.\t\n</Clarify>\n<ideal_output>\nIf possible, transfer unused benefits to next month. This may
    reduce the impact of benefit cuts.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nEligible
    families with a dependent child(ren) or individuals who are pregnant receive monthly cash assistance
    payments, help with emergency household expenses, and/or services such as counseling, training, and
    employment assistance.\t\n</Clarify>\n<ideal_output>\nEligible families with children or pregnant
    individuals receive: \n - Monthly cash assistance \n - Help with emergency household expenses \n -
    Services like counseling, training, and job
    assistance\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe are confident that using these
    resources as suggested with the recommended stakeholders will lead to more systemic, sustainable, and
    effective FCSP, yielding positive academic and behavioral student
    outcomes.\t\n</Clarify>\n<ideal_output>\nUsing these resources with recommended partners will lead
    to a more effective FCSP, improving student academic and behavioral
    outcomes.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe are excited to announce our
    upcoming Parent-Teacher Conference Week, which will take place from October 10th to October 14th.
    This is a wonderful opportunity for you to meet your child&#39;s teachers, discuss their progress, and learn
    more about the curriculum and activities planned for this school year. To ensure that every family has
    the chance to participate, we will be offering flexible meeting times, including early morning and late
    afternoon sessions. Additionally, translation services will be available for families who need them. If you
    require translation services, please let us know in advance so we can make the necessary arrangements.
    We believe that strong communication between home and school is essential for student success, and
    we look forward to partnering with you to support your child&#39;s
    education.\t\n</Clarify>\n<ideal_output>\nParent-Teacher Conferences are October 10-14. \nAt these
    meetings, you&#39;ll: \n - Meet teachers and discuss your child&#39;s progress \n - Learn about this year&#39;s
    curriculum and activities \n \n We offer flexible meeting times, including early morning and late
    afternoon. \n Translation services are available if requested in advance. \n We value communication
    with you and look forward to supporting your child&#39;s
    education.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nBy helping schools identify student
    needs and providing educators or other school personnel professional development and capacity-
    building opportunities, we assist in fostering student connectedness, cultivating a sense of belonging,
    and promoting educational success for students.\t\n</Clarify>\n<ideal_output>\nWe provide training
    
    for educators and help schools identify student needs. \nThis fosters student connection, belonging, and
    academic success.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nOut-of-School Time
    programs are available to students who are enrolled in a public school in kindergarten through twelfth
    grade and provide affordable and comprehensive academic enrichment and related services during
    times when school is not in session, including before school, after school, seasonal breaks, staff in-
    service days, staff conference days, or the fifth day of the week if the program serves students who are
    enrolled in a public school that operates on a four-day week.\t\n</Clarify>\n<ideal_output>\nOut-of-
    School Time programs offer affordable academic enrichment and services for K-12 public school
    students when school is not in session, including: \n - Before and after school \n - Seasonal breaks \n -
    Staff in-service and conference days \n - Fifth day of the week for four-day school
    weeks\n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe goal of the Program is to promote
    accessible, affordable, and equitable multimodal (transit, bike, etc.) transportation options for residents
    of all ages and abilities, and to raise awareness that transportation is a basic social, economic, and
    health need.\t\n</Clarify>\n<ideal_output>\nThe Program: \n - Promotes accessible and affordable
    transportation options like buses, bikes, and walking for all community members \n - Raises awareness
    that transportation is a basic social, economic, and health
    need\n</ideal_output>\n</example>\n<example>\n<Clarify>\nAffordable living (defined as spending
    no more than 15% of a household’s income on transportation and no more than 30% on housing) has
    increasingly become a challenge for many county residents. Despite transportation being one of the
    largest components of a low-income family’s budget, there are very few resources to help with
    transportation costs.\t\n</Clarify>\n<ideal_output>\nAffordable living is spending at most 15% of
    income on transportation and 30% on housing. This has become harder for many community members.
    Transportation is a big part of low-income family budgets, but there’s little help for these
    costs.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe program has initiated several
    projects that focus on improving access to affordable transportation, providing necessary amenities, and
    empowering residents through outreach and education.\t\n</Clarify>\n<ideal_output>\nThe program
    started projects to: \n - Improve access to affordable transportation \n - Provide needed services \n -
    Empower community members through outreach and
    education\n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe program, along with its
    stakeholders, developed a volunteer driver program using inclusive planning methods to empower older
    adults, people with disabilities, and caregivers.\t\n</Clarify>\n<ideal_output>\nThe program and
    partners created a volunteer driver program using inclusive planning to empower: \n - Older adults \n -
    People with disabilities \n -
    Caregivers\n</ideal_output>\n</example>\n<example>\n<Clarify>\nAcademic advising is a critical
    component in the success of undergraduate students. Its goal is to assist you in creating and achieving
    educational, career, and life goals. Advising is more than offering information about academic courses
    and registration; it also involves encouraging you to answer important questions about the nature and
    direction of your education. Academic advisors are here to get to know you, help you explore and
    understand your options, and personalize your overall academic
    experience.\t\n</Clarify>\n<ideal_output>\nAcademic advising enhances undergraduate student
    success. Advisers get to know you and support you to: \n - Create and achieve educational, career, and
    life goals \n - Explore the focus and direction of your education \n - Understand your options, including
    academic courses and registration \n - Personalize your academic
    experience\n</ideal_output>\n</example>\n<example>\n<Clarify>\nEvery student has a primary
    
    academic advisor as part of a team of student support professionals. You will receive advising support at
    least once in each of your first four semesters and may be offered referrals to various other resources
    on campus. Your primary academic advisor may reach out to you to offer support when they think you’d
    benefit from it. Students may have more than one academic advisor for multiple majors or minors and
    are welcome to connect with the advisor that best suits their
    needs.\t\n</Clarify>\n<ideal_output>\nEvery student has a main academic adviser in a support team.
    Your adviser: \n - Supports you at least once in each of your first four semesters \n - May refer you to
    other campus resources \n - May contact you when they think you need support \n \n Students with
    multiple majors or minors may have more than one adviser. You can connect with the adviser that best
    meets your needs.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe Lab was created under
    the leadership of the Governor’s Office to unlock data-informed solutions to our most pressing social
    problems. Working together with a broad range of government and community partners, we conduct
    research with rigor to obtain the best available evidence to address these challenges. With these
    essential elements guiding our collaborative efforts to improve the lives of residents, our goal is to
    leverage data to inform policy and practice, set the wheels in motion to achieve and sustain change, and
    position our partners to pursue additional meaningful change for the communities they
    serve.\n</Clarify>\n<ideal_output>\nThe Governor&#39;s Office created the Lab to find data-informed
    solutions to urgent social problems. We: \n - Work with government and community partners \n -
    Conduct research for best evidence \n - Use data to inform policy and practice \n - Achieve and sustain
    change \n - Help partners create meaningful change in their
    communities\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWhile our nation addresses a
    devastating worldwide health crisis with severe equity implications, the Council&#39;s strategic commitments
    of advancing equity-minded leadership, institutional transformation, and student success have never
    been more imperative. A college credential holds the potential to lift people up out of economic
    hardship, and yet the promise of higher education remains inaccessible for many of our students of
    color. At the Council, we stand committed to eliminating systemic racism on campuses through fostering
    and promoting high-quality institutional practices. True institutional transformation, however, cannot
    take place without emphasizing the critical role leadership plays in centering equity as a priority and
    connecting policy to practice, especially during uncertain times. As such, we are excited to share the
    findings from our study on shared equity leadership and are grateful to our partners for their important
    collaborative work on this report. Shared equity leadership provides institutional leaders a unique
    opportunity to scale their equity work by organizing teams across campus who take collective
    responsibility in developing and moving the diversity, equity, and inclusion agenda forward. This report
    and additional forthcoming papers from the study offer a new way of approaching leadership, one that
    provides leaders practical ways to build shared teams who implement cross-institutional strategies to
    increase equity on their respective campuses while also developing and nurturing their own and others’
    equity mindedness. The strategies outlined in this report were developed and supported by extensive
    research. The study is the first of its kind and includes the findings from interviews of more than 60
    campus leaders from diverse institutional contexts who practice shared leadership around equity issues.
    We believe this model brings leaders closer to institutional transformation and effectively improves
    equity outcomes for students of color. We invite campus leaders to closely examine this approach and
    consider how it can sustain their institution’s important work on diversity, equity, and
    inclusion.\n</Clarify>\n<ideal_output>\nOur strategic goals of equity-minded leadership, institutional
    change, and student success are crucial during this health crisis. Higher education can help people
    
    overcome financial struggles, but remains out of reach for many students of color. \n\nWe&#39;re
    committed to eliminating unfair systems and structures within colleges that disadvantage students of
    color. Real change requires leadership that prioritizes equity and links policy to practice. \n \n We&#39;re
    sharing findings on shared equity leadership where teams across campus work together on diversity,
    equity, and inclusion. This approach helps leaders: \n - Scale equity work \n - Implement cross-
    institutional strategies \n - Develop equity-mindedness \n \n Our study, based on interviews with over
    60 campus leaders, offers practical ways to build teams that improve equity outcomes for students of
    color. We encourage campus leaders to consider this approach for their diversity, equity, and inclusion
    work.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe are pleased you have decided to
    enroll your child in our School District. We are also excited to continue serving our returning students.
    Our registration process is web-based on all aspects of student registration, including document
    uploads. Please note that the registration process is not complete until the school reviews and approves
    all registration forms and required documents. Required documents may be uploaded or delivered to
    the school. Completing annual registration is essential as it allows schools to obtain your most up-to-
    date information, including emergency contacts and student medical updates. Your student’s school will
    contact you if additional information is needed. Those without the ability to register online will need to
    contact the school to arrange a date and time to register in person. Please click the type of student you
    are registering below for directions on how to proceed.\t\n</Clarify>\n<ideal_output>\nWe&#39;re happy
    you&#39;re enrolling your student in our School District, and we&#39;re excited to serve returning students. Our
    process is web-based. \n Important points: \n - Registration is complete only after the school reviews
    and approves all forms and required documents. \n - You can upload documents or deliver them to the
    school. \n - Annual registration is crucial for updating emergency contacts and student medical
    information. \n - The school will contact you if more information is needed. \n - If you can&#39;t register
    online, contact the school to coordinate in-person registration. Please select your student type below
    for specific directions.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nThe Secondary
    Learning Community (SLC) in our School District believes in the connection between a positive and
    supportive CULTURE/CLIMATE, COLLABORATION across schools and districts, and rigorous, data-
    analyzed CURRICULUM &amp; INSTRUCTION to ensure students are ready for whatever they choose to do
    upon graduation, whether that is going directly to full-time work, into the Armed Services, to college, or
    any combination of these.\t\n</Clarify>\n<ideal_output>\nOur School District&#39;s Secondary Learning
    Community (SLC) believes that to prepare students for life after graduation, we need: \n- A positive,
    supportive school environment \n- Collaboration between schools and districts \n- Challenging
    curriculum and instruction supported by data \n\nThis approach helps students succeed at work,
    military service, college, or a
    combination.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nInspire Infant &amp; Toddler Care at
    our center will focus on providing individualized care that helps babies and toddlers meet
    developmental milestones. Our highly trained teachers ensure little ones are growing and learning: from
    feeding to tummy time to taking their first steps, our teachers will be there to nurture their growth and
    help them stay on track. Each infant and toddler will have the support of an individualized care plan,
    which will allow our staff to follow your little one’s sleep, bottle, and activity schedule. Singing, reading
    books, playing, and enjoying quiet time, our caregivers will work to develop bonds with your little ones,
    inspiring trust and nurturing comfort.\t\n</Clarify>\n<ideal_output>\nInspire Infant &amp; Toddler Care at
    our center: \n - Provides individualized care to help babies and toddlers reach important stages of
    development\n - Has trained teachers who nurture growth and learning, from tummy time to first steps
    
    \n - Supports each child with an individualized care plan for sleep, feeding, and activities \n - Develops
    bonds through singing, reading, playing, and quiet time \n \n Our caregivers inspire trust and comfort
    while supporting your child&#39;s
    development.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe are a nonprofit
    organization that works to strengthen the foundations of community through programs that support
    youth development, healthy living, and social responsibility. Thanks to the generous support of those
    who donate to the Community Support Campaign and our fundraising events, we do our best to offer
    financial assistance to those who cannot afford the full fee and who qualify for assistance. We allocate
    many more dollars each year than we fundraise in order to support our community members to the best
    of our ability.\t\n</Clarify>\n<ideal_output>\nWe are a nonprofit with programs that support youth
    development, healthy living, and social responsibility. Thanks to donations and fundraising events, we
    offer financial assistance to those who qualify and can&#39;t afford full
    fees.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nWe are a one-stop shop designed to
    efficiently serve the needs of businesses and job seekers in an effort to promote economic development
    and vitality. Our no-cost services, which include assessments, workshops, recruitment assistance,
    business services, and much more, continue to propel our community into the future with education,
    training, and resources invaluable in making our community prosperous and globally
    competitive.\t\n</Clarify>\n<ideal_output>\nWe promote economic growth by supporting businesses
    and job seekers with free services, including: \n - Assessments \n - Workshops \n - Recruitment
    assistance \n - Business services \n \n These services help our community prosper and compete globally
    through education, training, and
    resources.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nGood evening families! Overall, we
    had a really great first day together! However, I do need your help. We are learning: • My number one
    job as a grown up and teacher is to keep children safe. • The children&#39;s number one job is to help me
    keep children safe. This means that it is their job to follow the rules. • Our class is our family. We use the
    term \"ohana\", a Hawaiian word meaning \"family\". As many of you know from Lilo and Stitch, ohana
    means family and family means that no one gets left behind. We watch out for each other. There were a
    few incidents today of children wandering off, leaving our group, and not staying with me. I had some
    frights today... Please help me by reinforcing the importance of always staying with the teacher they are
    with at all times. This helps me keep everyone safe and they are helping me to keep our family
    safe.\t\n</Clarify>\n<ideal_output>\nGood evening families, we had a great first day! However, some
    children wandered from the group today, which was concerning. We&#39;re learning: \n • My main job is
    keeping children safe \n • Children&#39;s job is following rules to help keep everyone safe \n • Our class is
    our \"\"ohana\"\" (family) - we watch out for each other \n \n Please emphasize with your child the
    importance of staying with their teacher at all times. This helps keep our \"\"ohana\"\"
    safe.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nOur school mental health team
    members have the opportunity to support students through a variety of situations. In our work with
    students, we are lucky to get to know so many wonderful things about who they are, and what they like
    to do inside and outside of school. A topic that often comes up in discussion is Social Media. Today,
    more than ever before, even our youngest students have cell phones and access to the internet and
    social media. While there are ample benefits offered by this technology, new research is coming out
    with better understanding of the potential downsides. Excessive use of social media has been linked
    with anxiety, depression, loneliness, dissatisfaction, and it can be
    addicting.\t\n</Clarify>\n<ideal_output>\nOur school mental health team supports students in various
    
    situations. We learn about students&#39; interests in and out of school. Social media often comes up in
    discussions. Many students, even young ones, now have phones and internet access. While technology
    offers benefits, research shows potential downsides. Too much social media use can lead to: anxiety,
    depression, loneliness, dissatisfaction, and
    addiction.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nPlease take some time to read the
    following information about Camp below. I ask that you complete a short survey by August 23 via the
    link below.\t\n</Clarify>\n<ideal_output>\nPlease read the information below about Camp and click
    the link to complete a short survey by August
    23.\n</ideal_output>\n</example>\n<example>\n<Clarify>\nAs you know the safety and wellbeing of
    students has always been a top priority of the School District. Whether it was taking on vaping company
    Juul (and winning) for its practices to advertise to children, changing start times for middle and high
    school students, our early decision to supply schools with life saving Narcan in the face of a national
    opioid epidemic or educating families about the importance of safe gun storage and the Be SMART
    campaign – time and time again, the School District has prioritized the wellbeing of our students. Today
    we are reaching out to you to share a conversation that our Board of Education had last month
    regarding cell phones and the impact they are having on our students. They directed district staff to: •
    Strengthen our policy on this topic Here is the current policy: JRCT-R Student Use of Cell Phones and
    Other Personal Technology Devices, which requires that high school students put away devices while
    they are in the classroom • Engage our community to gather feedback regarding concerns or challenges
    a strengthened policy may pose for families As a result, we are inviting high school students, families
    and staff members to participate in this survey. It is short (less than five minutes) and provides an
    opportunity for everyone to share their thoughts on the best way to implement, as well as any concerns
    that may come to mind. Thank you for your partnership in keeping our students safe and
    well.\t\n</Clarify>\n<ideal_output>\nOur Board of Education plans to strengthen the high school cell
    phone policy. We invite high school students, families, and staff to complete a 5-minute survey about
    this change. The survey asks for your: \n • Ideas on implementing a stronger policy \n • Concerns about
    potential challenges \n \n Current policy: Students must put away devices in class. See the full policy. \n
    \n This action aligns with our priority on student safety and wellbeing. We&#39;ve also taken action on: \n •
    Vaping \n • School start times \n • Narcan availability \n • Gun safety education \n \n Thank you for
    your input on this important issue!\n</ideal_output>\n</example>\n<example>\n<Clarify>\nCCC is an
    ongoing practice that provides municipal officials with a clear understanding of what matters most to
    their constituents–all the residents–and forges a partnership that builds on the first thing everyone has
    in common: they all live here. It’s not a report that sits on a shelf; it’s a way of coming together to make
    your town a better place to live in and visit.\t\n</Clarify>\n<ideal_output>\nCCC is an ongoing practice
    that: \n • Helps municipal officials understand what matters to all residents \n • Creates partnerships
    based on shared community \n • Brings people together to improve the town for residents and
    visitors.\n\nIt&#39;s not just a report, but a way to make positive
    changes.\n</ideal_output>\n</example>\n<example>\n<clarify>\nI am thrilled to introduce myself as
    the new elementary principal of BH School. It is an honor to join such a vibrant and dedicated
    community, and I look forward to working together to ensure that every student thrives academically
    and personally. As we embark on the 2024-2025 school year, I am excited and optimistic about the
    journey ahead. I would like to meet with the community before the busy school year begins. I welcome
    you all to meet with me and our other administrators at our \"Popsicles with the Principals” event. We
    will hold this event on July 29th from 4:00 to 5:00 out front of the school. This gives us an excellent
    
    opportunity to connect with the community.\n</clarify>\n<ideal_output>\nI&#39;m excited to be your new
    elementary principal at BH School! I look forward to working with you to help every student
    succeed.\nJoin us for \"Popsicles with the Principals\":\n- July 29th, 4:00-5:00 PM, in front of the school.
    \n\nMeet me and other administrators before the school year
    starts.\n</ideal_output>\n</example>\n<example>\n<clarify>\nOur work aims at ensuring that
    affordability coverage programs, including Medicaid, Child Health Plus (CHP+), and subsidized
    commercial plans, are comprehensive, efficient, and effective so that Coloradans have access to
    preventive care and treatment that will enhance their lives in the short- and long-term. Our complex
    systems can be challenging, so we also provide Coloradans with more tools to advocate on their own
    behalf, and to get the care they and their families need.\t\n</clarify>\n<ideal_output>\nWe improve
    health coverage programs, including: \n • Medicaid \n • Child Health Plus (CHP+) \n • Reduced-cost
    commercial plans \n \n Our goals: \n 1. Make programs complete, efficient, and effective \n 2. Give
    community members access to preventive care and treatment \n 3. Provide tools for understanding
    complex systems \n 4. Help community members get the care they
    need\n</ideal_output>\n</example>\n<example>\n<clarify>\nFood assistance programs such as the
    Supplemental Nutrition Assistance Program (SNAP) and Women, Infants, and Children (WIC) are the
    sturdy backbone of our state’s public benefits system. Of the state’s eligible SNAP population, only
    about 60 percent are enrolled. The figure is even lower for WIC, at around 50 percent. Not only does this
    mean Colorado loses millions of dollars in federal funding, but our state’s population is less healthy and
    able to achieve goals such as working or going to school.\t\n</clarify>\n<ideal_output>\nFood
    assistance programs Supplemental Nutrition Assistance Program (SNAP) and Women, Infants, and
    Children (WIC) are important for our state&#39;s public benefits. Only: \n • 60% of eligible community
    members use SNAP \n • 50% use WIC \n \n This means: \n • Colorado receives less federal money \n •
    Our community is less healthy \n • Community members find it harder to work or
    study\n</ideal_output>\n</example>\n<example>\n<clarify>\nBesides working with state legislators to
    transform legislation into law, we take our expertise to the administrative level of state government to
    propose policies that make it easier for Coloradans to obtain and use food assistance benefits. For
    example, we advise Colorado’s State Board of Human Services on rules that apply to programs like SNAP
    and WIC. We meet regularly with officials at the Colorado Department of Human Services on program
    issues. Our research team also reviews the effects of rules that govern Colorado’s food assistance
    programs on participant enrollment and retention.\t\n</clarify>\n<ideal_output>\nWe support
    community members in getting and using food assistance by: \n 1. Working with lawmakers on new
    laws \n 2. Suggesting new policies to state government \n 3. Advising on rules for food programs like
    Supplemental Nutrition Assistance Program (SNAP) and Women, Infants, and Children (WIC) \n4.
    Meeting with Human Services officials \n 5. Studying how rules affect program
    participation\n</ideal_output>\n</example>\n<example>\n<clarify>\n8th grade science just finished
    up our unit on Light and Sound waves with 4 days of labs using the light boxes. We looked at reflection
    and refraction with lenses and mirrors. We also used color slides to see how the primary colors of light
    are used to make white light. They were all surprised to learn that the primary colors of light are not the
    same as the primary colors of pigment. This week we head into refresher lessons on weather and move
    towards our new unit on global climate patterns and changes.\t\n</clarify>\n<ideal_output>\n8th
    grade science completed our Light and Sound waves unit with 4 days of light box labs. We studied: \n -
    Reflection and refraction using lenses and mirrors \n - How primary light colors create white light \n -
    How light and pigment have different primary colors. \n \n This week, we review weather and start our
    
    unit on global climate patterns and
    changes.\n</ideal_output>\n</example>\n<example>\n<clarify>\nOur mission is to provide a safe,
    supportive, academically rich environment utilizing best practices to develop all students to be
    productive citizens and preparing lifelong learners for post-secondary readiness and success in a global
    society.\t\n</clarify>\n<ideal_output>\nOur mission is to provide a safe, supportive learning
    environment that: \n • Uses best practices \n • Develops productive community members \n • Prepares
    students for success after high school\n</ideal_output>\n</example>\n<example>\n<clarity>\nThere
    are key tasks to complete. \n</clarity>\n<ideal_output>\nThere are essential tasks to complete.
    \n</ideal_output>\n</example>\n<example>\n<clarity>\nPlease seal the
    envelope.\n</clarity>\n<ideal_output>\nPlease close the envelope.
    \n</ideal_output>\n</example>\n<example>\n<clarity>\nThe program kicks off in two weeks.
    \n</clarity>\n<ideal_output>\nThe program begins in two weeks.
    \n</ideal_output>\n</example>\n<example>\n<clarity>\nHe is getting over a
    sickness.\n</clarity>\n<ideal_output>\nHe is recovering from a sickness.
    \n</ideal_output>\n</example>\n<example>\n<clarity>\nThe deadline for the proposal is coming
    soon.\n</clarity>\n<ideal_output>\nProposals are due by
    [date].\n</ideal_output>\n</example>\n<example>\n<clarity>\nShe is a bright
    student.\n</clarity>\n<ideal_output>\nShe is an intelligent
    student.\n</ideal_output>\n</example>\n<example>\n<clarity>\nWrite your name on this slip of
    paper.\n</clarity>\n<ideal_output>\nWrite your name on this paper.
    \n</ideal_output>\n</example>\n<example>\n<clarity>\nEnter your name to enter the drawing.
    \n</clarity>\n<ideal_output>\nWrite your name for a chance to win a prize.
    \n</ideal_output>\n</example>\n<example>\n<clarity>\nInterpretation services (oral, by video) are
    offered for free to parents and families, and must be requested by an
    employee.\t\n</clarity>\n<ideal_output>\nVideo or oral interpretation services are free families, and
    must be requested by an employee.\n</ideal_output>\n</example>\n<example>\n<clarity>\nIf
    selected for an interview, we will request three professional references. Please gather the contact
    information (phone and email) for three references in preparation for this part of our
    process.\t\n</clarity>\n<ideal_output>\nPlease provide the phone and email for three professional
    references if you receive an interview.\n</ideal_output>\n</example>\n<example>\n<clarity>\nWe
    require commitments (financial or non-financial). \n</clarity>\n<ideal_output>\nWe require financial or
    non-financial commitments. \n</ideal_output>\n</example>\n<example>\n<clarity>\nThe proposal is
    due soon. \n</clarity>\n<ideal_output>\nThe proposal is due [date].
    \n</ideal_output>\n</example>\n<example>\n<clarity>\nWhen language access practices are in place
    at the city, language is no longer a barrier for residents to meaningfully participate in, and benefit from,
    information, programs, services, and activities, including civic engagement and decision-making
    processes.\t\n</clarity>\n<ideal_output>\nWhen people can understand communication from the city,
    they can: \n • Receive information \n • Access services \n • Be more
    involved\n</ideal_output>\n</example>\n<example>\n<clarity>\nIn an effort to update you about
    policies that impact our work, please see the following review of CCC-related legislation that passed
    during the 2023 legislative session.\t\n</clarity>\n<ideal_output>\nSee the following review of
    important CCC-related legislation passed during the 2023 legislative session:
    \n</ideal_output>\n</example>\n</examples>\n\n"
    },`,
};
