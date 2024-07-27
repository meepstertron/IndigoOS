class FileSize {
    getInfo() {
      return {
        id: 'filesize',
        name: 'FileSize',
        blocks: [
          {
            opcode: 'getByteSize',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] Get Size In bytes',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ':3'
              }
            }
          }
        ]
      };
    }
  
    getByteSize(args) {
        const textEncoder = new TextEncoder();
      return String(textEncoder.encode(String(args.ONE)).length);
    }
  }
  
  Scratch.extensions.register(new FileSize());
