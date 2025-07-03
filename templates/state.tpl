part of 'cubit.dart';

sealed class {{name}}State extends Equatable {
  const {{name}}State();

  @override
  List<Object?> get props => [];
}

final class {{name}}InitialState extends {{name}}State {}

final class {{name}}LoadingState extends {{name}}State {}

final class {{name}}LoadedState extends {{name}}State {}

final class {{name}}ErrorState extends {{name}}State {}