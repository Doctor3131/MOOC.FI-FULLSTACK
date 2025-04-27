# **List command untuk server**

### **IP ES2**
IP: 13.236.137.153

### **Untuk upload file yang dirubah ke server dari local machine**
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/sea-siriel-windows.pem" \
. ubuntu@ec2-13-236-137-153.ap-southeast-2.compute.amazonaws.com:~/Notes-app/Backend

### **Untuk connect ke cloud vm aws**
ssh -i "~/.ssh/sea-siriel-windows.pem" ubuntu@ec2-13-236-137-153.ap-southeast-2.compute.amazonaws.com

### **Untuk mongodb**
sirielfahri - Profesor31

### **Untuk mongodb**
mongodb+srv://sirielfahri:Profesor31@cluster0.td6raz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

                    