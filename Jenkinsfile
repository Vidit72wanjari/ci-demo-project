pipeline {
    agent any

    stages {

<<<<<<< HEAD
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Vidit72wanjari/ci-demo-project.git'
            }
        }

=======
>>>>>>> 56f7b73 (removed clone stage + fixed pipeline)
        stage('Install Dependencies') {
            steps {
                bat 'pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'pytest'
            }
        }

        stage('Build Success') {
            steps {
                echo 'CI Pipeline executed successfully!'
            }
        }
    }

    post {
        failure {
            echo 'Build Failed!'
        }
        success {
            echo 'Build Passed!'
        }
    }
}
