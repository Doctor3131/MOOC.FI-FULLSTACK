# **List command untuk server**

### **Untuk upload file yang dirubah ke server dari local machine**
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/sea-siriel-windows.pem" \
. ubuntu@ec2-54-253-8-85.ap-southeast-2.compute.amazonaws.com:~/Notes-app/Backend

### **Untuk connect ke cloud vm aws**
ssh -i "~/.ssh/sea-siriel-windows.pem" ubuntu@ec2-54-253-8-85.ap-southeast-2.compute.amazonaws.com

