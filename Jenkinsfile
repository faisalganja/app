pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        S3_BUCKET = 'your-artifact-bucket'
        BUILD_DIR = 'dist'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-org/app-repo.git'
            }
        }

        stage('Setup Node.js') {
            steps {
                sh 'nvm install 18 && nvm use 18'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Upload Artifacts') {
            steps {
                withAWS(credentials: 'aws-jenkins-credentials', region: env.AWS_REGION) {
                    sh 'aws s3 sync ${BUILD_DIR} s3://${S3_BUCKET}/artifacts/${BUILD_NUMBER}/'
                }
            }
        }
    }
}