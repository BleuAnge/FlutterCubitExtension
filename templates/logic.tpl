import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import './cubit.dart';

class {{name}}Widget extends StatefulWidget {
  const {{name}}Widget({super.key});

  @override
  State<{{name}}Widget> createState() => _{{name}}WidgetState();
}

class _{{name}}WidgetState extends State<{{name}}Widget> {
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<{{name}}Cubit, {{name}}State>(
      builder: (context, state) {
        return switch (state) {
          {{name}}InitialState() => Container(),
          
          {{name}}LoadingState() => Container(),
          
          {{name}}LoadedState() => Container(),
          
          {{name}}ErrorState() => Container(),
        };
      },
    );
  }
}