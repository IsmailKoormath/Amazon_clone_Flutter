import 'package:flutter/material.dart';

class CustomInputField extends StatelessWidget {
  final TextEditingController controller;
  final String hintText;

  const CustomInputField({
    super.key,
    required this.controller,
    required this.hintText,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: TextFormField(
        controller: controller,
        decoration: InputDecoration(
          hintText: hintText,
          border: const OutlineInputBorder(
              borderSide: BorderSide(
            color: Colors.black38,
          )),
          enabledBorder: const OutlineInputBorder(
              borderSide: BorderSide(
            color: Colors.black38,
          )),
        ),
        validator: (val) {},
      ),
    );
  }
}
