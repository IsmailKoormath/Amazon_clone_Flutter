import 'package:amazon_clone/Common/widgets/custom_textfield.dart';
import 'package:amazon_clone/Common/widgets/custom_button.dart';
import 'package:amazon_clone/constants/global_variables.dart';
import 'package:flutter/material.dart';

enum Auth{
  signin,
  signup,
}

class AuthScreen extends StatefulWidget {
  static const String routeName = '/auth-route';

  const AuthScreen({super.key});


  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {

 Auth _auth = Auth.signup;
 final _signUpFormKey = GlobalKey<FormState>();
 final _signInFormKey = GlobalKey<FormState>();

 final TextEditingController _emailController = TextEditingController();
 final TextEditingController _passwordController = TextEditingController();
 final TextEditingController _nameController = TextEditingController();

 @override
  void dispose() {
    super.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    _nameController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor:GlobalVariables.greyBackgroundCOlor,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
             const Text('Welcome',style: TextStyle(fontSize: 18,fontWeight: FontWeight.w500),),
             ListTile(
              tileColor: _auth == Auth.signup ? GlobalVariables.backgroundColor :GlobalVariables.greyBackgroundCOlor,
              title: Text('Create Account',style: TextStyle(fontWeight: FontWeight.bold),),
              leading: Radio(
                activeColor: GlobalVariables.secondaryColor,
                value: Auth.signup,
                groupValue: _auth,
                onChanged: (Auth? val){
                  setState(() {
                    _auth =val!;
                  });
                },
              ),
             ),
             if(_auth == Auth.signup)
             Container(
              padding: EdgeInsets.all(8),     
              color: GlobalVariables.backgroundColor,      
               child: Form(
                key: _signUpFormKey,
                child: Column(
                  children: [
                    CustomInputField(controller: _nameController
                    ,hintText: 'Name',),
                    CustomInputField(controller: _emailController
                    ,hintText: 'Email',),
                    CustomInputField(controller: _passwordController
                    ,hintText: 'Password',),
                    const SizedBox(height: 10,),
                     CustomButton(text:'Sign Up', onTap:(){}),
                  ],
                  
                ),
               ),
             ),
             ListTile(
              tileColor: _auth == Auth.signin ? GlobalVariables.backgroundColor :GlobalVariables.greyBackgroundCOlor,
              title: Text('Sign-in',style: TextStyle(fontWeight: FontWeight.bold),),
              leading: Radio(
                activeColor: GlobalVariables.secondaryColor,
                value: Auth.signin,
                groupValue: _auth,
                onChanged: (Auth? val){
                  setState(() {
                    _auth =val!;
                  });
                },
              ),
             ),
              if(_auth == Auth.signin)
             Container(
              padding: EdgeInsets.all(8),     
              color: GlobalVariables.backgroundColor,      
               child: Form(
                key: _signUpFormKey,
                child: Column(
                  children: [
                    CustomInputField(controller: _emailController
                    ,hintText: 'Email',),
                    CustomInputField(controller: _passwordController
                    ,hintText: 'Password',),
                    const SizedBox(height: 10,),
                     CustomButton(text:'Sign In', onTap:(){}),
                  ],
                  
                ),
               ),
             ),

            ],
          ),
        )
      ),
    );
  }
}