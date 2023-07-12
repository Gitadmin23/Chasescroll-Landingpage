pipeline {
  // agent { label 'apache' }
  agent{ label 'chasescrolllandingpage' }
  stages {
    stage('Create File') {
      steps {
        sh 'echo "Hello, world!" > newfile.txt'
      }
    }
    stage('View the contents of the root folder'){
        steps{
            sh 'cd ~ && ls -al'
        }
    }

   stage('Clone'){
        steps{
            withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'github_creds', usernameVariable: 'GITHUB_CREDENTIALS_USR', passwordVariable: 'GITHUB_CREDENTIALS_PSW']]) {
                sh "cd /home/bitnami/agent && git clone https://github.com/ChasescrollGit/website-landing-page "
                
            }
        }
        }
   stage('Install the scripts'){
        steps{
            sh """ 
              curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
              sudo apt-get install -y nodejs
              sudo npm install npm@latest -g
            """
        }
    }
    stage('Testing agent properties'){
        steps{
            sh 'pwd && sudo ls /home/bitnami/agent'
    }
    }
     stage('Build the project and copy the contents to the ~/stack/apache/htdocs'){
        steps{
            sh 'cd /home/bitnami/agent/website-landing-page && ls -la && npm install && npm run build'
            sh 'rm -rf ~/stack/apache/htdocs/*'
            sh 'cp -r /home/bitnami/agent/website-landing-page/dist/* ~/stack/apache/htdocs'
            sh 'cd /home/bitnami/agent/website-landing-page && ls -la  && cd ~/stack/apache/htdocs'
            // sh 'export NODE_OPTIONS=--max_old_space_size=4096'
        }
    }

    
    stage('Restart the Apache service'){
        steps{
            sh 'sudo /opt/bitnami/ctlscript.sh restart apache'
        }
    }
    }
}
