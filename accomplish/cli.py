"""Console script for accomplish."""
import sys
import click


@click.command()
@click.option("--name", prompt="Enter your name", help="The name of user")
def main(name):
    click.echo(f'Hi {name}')
    return 0


if __name__ == "__main__":
    sys.exit(main())  # pragma: no cover
