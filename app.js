const express = require('express');
const app = express();

// Set the template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Define the resume data
const resumeData = {
  name: 'Marcio Barbato',
  description: 'DevOps Engineer',
  address: 'Silva Brinco street 301, Porto, Portugal',
  email: 'marciobarbato@gmail.com',
  title: 'Professional Summary',
  summary: 'Brazilian Cloud Engineer professional who likes to automate the workload and dream to work on something that impacts people´s life.',
  techSkills: ['Microsoft Azure', 'AWS Cloud','Linux and Windows Administration','CI/CD Pipeline with Azure DevOps','Ansible','ARM Templates','Terraform','Kubernetes'],
  experience: [
    {
      position: 'DevOps Engineer',
      company: 'Cofco International',
      duration: 'Jan 2023 - Present',
      responsibilities: 'Responsible for terraform standards, dev team assistance on azure DevOps best practices.'
    },
    {
      position: 'Azure Support Engineer',
      company: 'Microsoft',
      duration: 'May 2022 - Dec 2022',
      responsibilities: 'Azure Stack Hub team member worked assisting customers with administrative tasks for azure private cloud.'
    },
    {
      position: 'Cloud Engineer',
      company: 'Cofco International',
      duration: 'Dec 2020 - April 2022',
      responsibilities: 'Responsible for cloud deployments, cloud service management, automation using ansible and CICD with Azure DevOps.'
    },
    {
      position: 'DevOps Engineer',
      company: 'EPAM',
      duration: 'Feb 2020 - Dec 2020',
      responsibilities: 'Responsible for planning and development of Cloud Infrastructure, CI/CD Pipelines for third-party customers. Worked with AWS environment on a full redesign for an automated web portal.'
    },
    {
      position: 'DevOps Engineer',
      company: 'Sage Software',
      duration: 'Jul 2017 - Dec 2019',
      responsibilities: 'Responsible for cloud deployments and application release. Worked with TeamCity and Azure DevOps.'
    }
  ],
  education: [
    {
      degree: 'Bachelor',
      institution: 'UTFPR, Ponta Grossa',
      graduationYear: '2015'
    }      
  ],
  certifications: [
    {
        vendor: 'Azure DevOps Engineer Expert',
        issued: 'Issued: Nov 2021',
        expiration: 'Expiration: Nov 2023'
    },
    {
        vendor: 'Azure Administrator Associate',
        issued: 'Issued: Apr 2021',
        expiration: 'Expiration: April 2025'
    },
    {
        vendor: 'Azure Fundamentals',
        issued: 'Issued: Apr 2021',
    }
  ],
  languages: [
    {
      language: 'Portuguese',
      proficiency: 'Native'
    },
    {
      language: 'English',
      proficiency: 'Advanced'
    }
  ]
};

// Set up routes
app.get('/', (req, res) => {
  res.send('Welcome to My Resume');
});

app.get('/resume', (req, res) => {
  res.render('resume', { resume: resumeData });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
