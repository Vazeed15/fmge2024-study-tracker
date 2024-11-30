function updateCountdown() {
    const targetDate = new Date('January 11, 2025 00:00:00').getTime();
    
    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // If countdown is finished
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById('countdown').innerHTML = "EXAM DAY!";
        }
    }

    // Update immediately and then every second
    update();
    const timerInterval = setInterval(update, 1000);
}

const syllabus = {
    'Anatomy': [
        'General Anatomy: Terminology, Nomenclature, and Basic tissues to body',
        'Elements of Anatomy: Myology, Angiology, Neurology, Osteology, and Arthrology',
        'Regional Anatomy: Upper limb, Lower limb Including diaphragm Abdomen and Pelvis, Head, Neck, Brain, and Spinal cord',
        'Embryology: Development of individual organs and systems, postnatal growth & development',
        'Histology: General Histology'
    ],
    'Physiology': [
        'General Physiology',
        'Body fluids – Blood',
        'Nerve and Muscle',
        'Gastrointestinal Tract',
        'Kidney',
        'Skin and Body temperature',
        'Endocrine Glands',
        'Reproduction',
        'Cardiovascular System',
        'Respiratory System',
        'Central Nervous Systems',
        'Special Senses'
    ],
    'Biochemistry': [
        'Cell and Sub-cellular structures',
        'Hydrogen Ion concentration Acid, Bases, Buffers, Handerson-Haselbach equation',
        'Isotopes and their Application',
        'Carbohydrates',
        'Amino Acids, Peptides and Proteins',
        'Lipids',
        'Biological Oxidation',
        'Digestion and Absorption from GI Tract',
        'Nuclear Acids',
        'Enzymes',
        'Vitamins',
        'Intermediary Metabolism',
        'Carbohydrate Metabolism',
        'Lipid Metabolism',
        'Protein and Amino Acid Metabolism',
        'Liver Functions',
        'Nutrition and Energy Metabolism',
        'Purine and Primidine Metabolism',
        'Minerals',
        'Biochemical Genetics and Protein Biosynthesis',
        'Tissue Biochemistry'
    ],
    'Pathology': [
        'Cell injury',
        'Inflammation and Repair',
        'Immunopathology',
        'Nutritional and other disorders',
        'Genetic disorder',
        'Haematology',
        'Cardiovascular Pathology',
        'Infectious diseases',
        'Circulatory disturbances',
        'Growth disturbances and Neoplasia',
        'Respiratory Pathology',
        'Pathology of Kidney and urinary Tract',
        'Hepato-Biliary Pathology',
        'Lymphoreticular System / Spleen',
        'Endocrine pathology',
        'Neuropathology',
        'Dermato-Pathology',
        'Reproductive System (male & female)',
        'Diseases of the Breast',
        'Musculoskeletal System',
        'Ocular Pathology'
    ],
    'Microbiology': [
        'General Microbiology',
        'Immunology',
        'Bacteriology',
        'Mycology',
        'Parasitology',
        'General Virology',
        'Systemic Virology',
        'Clinical and Applied Microbiology'
    ],
    'Pharmacology': [
        'General Pharmacology',
        'Autonomic Nervous System',
        'Diuretics',
        'Drugs affecting blood and blood formation',
        'Autocoids and related drugs',
        'Cardio-vascular System',
        'Respiratory System',
        'Gastro-intestinal System',
        'Endocrine pharmacology',
        'Drugs in Anaesthetic practice',
        'Chemotherapy',
        'Central Nervous System',
        'Psychopharmacology',
        'Toxicology',
        'Clinical Pharmacology and Rational Drug Use'
    ],
    'Forensic Medicine': [
        'Medical Certifications & medico-legal reports including dying declaration',
        'Death',
        'Changes after death',
        'Inquest by police, magistrate and coroner',
        'Identification',
        'Examination of mutilated human remains',
        'Injuries due to physical agents & their medico-legal importance',
        'Medico-legal autopsies',
        'Mechanical injuries and wounds',
        'Examination of an Injury Case',
        'Asphyxial death',
        'Death due to malnutrition, neglect battered babies',
        'Dowry death',
        'Virginity, sexual offenses, sexual perversions',
        'Legitimacy',
        'Medical Jurisprudence',
        'Toxicology',
        'Courts of India',
        'Court procedures',
        'Pregnancy and delivery',
        'Infanticide',
        'Biological fluids',
        'Seminal stains',
        'Forensic Psychiatry'
    ],
    'General Surgery': [
        'Hemorrhage and shock',
        'Fluid, electrolyte, and Acid balance, nutrition',
        'Skin tumors, burns, skin grafting',
        'Arterial diseases',
        'Venous diseases',
        'Lymphatic and Lymph nodes',
        'Wounds',
        'Specific and non-specific injections',
        'Tumors, Cysts, Ulcers and Sinuses, and Fistulae',
        'Infections of Hand and Foot',
        'Diseases of muscle, tendons, bursae and fascia',
        'Hernia',
        'Umbilical granuloma, fistula, adenoma',
        'Abdominal Wall',
        'Thyroid Glands, Thyroglossal Tract, and Endocrines',
        'Breast',
        'Face, Teeth, Gums, Mouth, Tongue, Salivary glands, Neck',
        'Sympathetic System',
        'Appendix',
        'Rectum and Anal Canal'
    ],
    'Anesthesia': [
        'Anatomy of upper airway',
        'Physiology of Respiration O2/CO2 transport',
        'Methods of oxygen therapy',
        'Pre-operative evaluation/pre-medication',
        'Anaesthetic agents, stages of Anaesthesia',
        'Principles and mechanism of administration of general anaesthetics',
        'IPPV, Endotracheal Intubations',
        'Muscle Relaxants',
        'Spinal/Epidural Anesthesia',
        'Local Anesthesia',
        'Cardiopulmonary resuscitation basic, use of simple ventilators',
        'Monitoring',
        'ICU, the role of anaesthesiologist in ICU',
        'Shock',
        'Blood Transfusion and Fluid Electoral Balance',
        'Role of anaesthesiologist in acute and chronic relief'
    ],
    'Orthopedics': [
        'Traumatology',
        'Injuries to bones and joints',
        'Injuries of the Lower Extremity',
        'Injuries of the Spine Vascular Injuries',
        'Bone and Joint Tuberculosis',
        'Cold Orthopedics',
        'Regional Conditions',
        'Neuro-Muscular Disorder',
        'Physical Medicine and Rehabilitation'
    ],
    'Radio Diagnosis': [
        'Respiratory System',
        'Cardiovascular System',
        'Gastrointestinal System',
        'Central Nervous System',
        'Obstetrics and Gynaecology',
        'Skeletal System',
        'Excretory System'
    ],
    'Radiotherapy': [
        'Principles of Radiotherapy',
        'Principles of Chemotherapy',
        'Prevention and Early Diagnosis of Cancer',
        'Common radiation reactions and management',
        'Principles of Nuclear Medicine',
        'Radiotherapy and chemotherapy in commonly seen cancers',
        'Radio-isotopes in diagnosis and therapy'
    ],
    'Pediatrics': [
        'Vital statistics',
        'Neonatology',
        'Growth & Development',
        'Nutrition',
        'Infections',
        'Genetics',
        'Pediatric Emergencies',
        'Nephrology',
        'Endocrinology',
        'Gastroenterology',
        'Respiratory System'
    ],
    'Medicine': [
        'Clinical Methods in the Practice of Medicine',
        'Common symptoms of disease',
        'Nutrition/Exposure to Physical & Chemical Agents',
        'Infections',
        'Haematology',
        'Respiratory System',
        'Neurological System',
        'Nephrology & Urinary System Connected to Tissue Disorders',
        'Endocrine System',
        'Geriatrics',
        'Cardio-Vascular System',
        'Gastro-Intestinal Tract',
        'Emergency Medicine'
    ],
    'Psychiatry': [
        'History aspects and diagnosis & treatment of mental illness',
        'Conduction of Mental Status Examination',
        'Behavioral Sciences',
        'Different psychoses Clinical features, diagnosis and management',
        'Dementia',
        'Alcoholism',
        'Drug Abuse',
        'Schizophrenia',
        'Mania and depression',
        'Anxiety disorders and hysteria',
        'Psychiatric emergencies',
        'Clinical features, diagnosis, and management of psychiatric disorders of childhood and adolescence',
        'Personality disorder'
    ],
    'Obstetrics and Gynecology': [
        'Anatomy of the Female Reproductive Tract',
        'Physiology of conception',
        'Development of foetus and placenta',
        'Diagnosis of pregnancy',
        'Normal labour',
        'Normal puerparium',
        'Breast Feeding',
        'Care of newborn',
        'Maternal changes in pregnancy',
        'Antenatal care',
        'Abnormal obstetrics',
        'Medical termination of pregnancy',
        'Family planning'
    ]
};

class SyllabusTracker {
    constructor() {
        this.container = document.getElementById('syllabus-container');
        this.resetBtn = document.getElementById('resetBtn');
        this.init();
    }

    init() {
        this.createTracker();
        this.setupEventListeners();
        this.loadProgress();
        this.updateOverallProgress();
    }

    createTracker() {
        Object.entries(syllabus).forEach(([subject, topics]) => {
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'subject-container';
            
            const title = document.createElement('div');
            title.className = 'subject-title';
            title.textContent = subject;
            
            const topicList = document.createElement('div');
            topicList.className = 'topic-list';
            
            topics.forEach((topic, index) => {
                const topicItem = this.createTopicItem(subject, topic, index);
                topicList.appendChild(topicItem);
            });
            
            subjectDiv.appendChild(title);
            subjectDiv.appendChild(topicList);
            this.container.appendChild(subjectDiv);
        });
    }

    createTopicItem(subject, topic, index) {
        const topicItem = document.createElement('div');
        topicItem.className = 'topic-item';
        
        // Add unique ID for tracking progress
        const checkboxId = `${subject}-${index}`.replace(/\s+/g, '-').toLowerCase();
        
        topicItem.innerHTML = `
            <div class="checkbox-wrapper">
                <input type="checkbox" class="custom-checkbox" id="${checkboxId}">
                <label class="checkbox-label" for="${checkboxId}">
                    ${topic}
                </label>
            </div>
        `;
        
        return topicItem;
    }

    setupEventListeners() {
        this.container.addEventListener('change', () => {
            this.saveProgress();
            this.updateOverallProgress();
        });

        this.resetBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all progress?')) {
                this.resetProgress();
            }
        });
    }

    updateOverallProgress() {
        const checkboxes = document.querySelectorAll('.custom-checkbox');
        const total = checkboxes.length;
        const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
        const percentage = (checked / total) * 100;

        const progressBar = document.getElementById('overall-progress');
        const progressText = document.getElementById('progress-text');

        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage.toFixed(1)}% Completed`;
    }

    saveProgress() {
        const progress = {};
        document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
            progress[checkbox.id] = checkbox.checked;
        });
        localStorage.setItem('fmgeProgress', JSON.stringify(progress));
    }

    loadProgress() {
        const progress = JSON.parse(localStorage.getItem('fmgeProgress')) || {};
        Object.entries(progress).forEach(([id, checked]) => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = checked;
            }
        });
    }

    resetProgress() {
        document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
        localStorage.removeItem('fmgeProgress');
        this.updateOverallProgress();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SyllabusTracker();
    updateCountdown();
}); 