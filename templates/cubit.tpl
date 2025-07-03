import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';

part 'state.dart';

class {{name}}Cubit extends Cubit<{{name}}State> {
  {{name}}Cubit(
    // required variables here
  ) : super({{name}}InitialState());

  void Init() {
    // Init Function Here
  }
}